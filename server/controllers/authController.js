const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModal')

exports.register = async (req, res) => {
  const { username, password } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, password: hashedPassword })
    await newUser.save()

    res.json({ status: 'success', message: 'User registered successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: 'User registration failed', error })
  }
}

exports.login = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })
    if (!user) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Invalid username or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Invalid username or password' })
    }

    // Define the token expiration time (in seconds)
    const expiresIn = 60 * 60 // 1 hour

    // Generate the token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn,
    })

    // Calculate the exact expiration time in milliseconds
    const expiresAt = Date.now() + expiresIn * 1000 // Convert to milliseconds

    // Respond with the token and expiration time
    res.json({
      status: 'success',
      message: 'Login successful',
      token,
      expiresAt, // Include the expiration time in the response
    })
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Login failed', error })
  }
}

exports.logout = async (req, res) => {
  res.json({ status: 'success', message: 'Logout successful' })
}
