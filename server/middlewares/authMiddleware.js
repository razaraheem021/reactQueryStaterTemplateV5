const jwt = require('jsonwebtoken')
const User = require('../models/userModal')

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res
      .status(401)
      .json({ status: 'error', message: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)

    if (!user) {
      throw new Error()
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ status: 'error', message: 'Invalid token' })
  }
}

module.exports = authMiddleware
