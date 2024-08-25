export const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    window.location.replace('/login')
  }
  return token
}

export const autoLogoutLoader = () => {
  console.log(
    'checking________________________________________________________________'
  )
  const token = localStorage.getItem('token')
  const expiresAt = localStorage.getItem('expiresAt')

  if (token && expiresAt) {
    const currentTime = Date.now()
    const timeUntilExpiration = expiresAt - currentTime

    if (timeUntilExpiration <= 0) {
      localStorage.removeItem('token')
      localStorage.removeItem('expiresAt')
      window.location.href = '/login'
      return null
    } else {
      return { token }
    }
  } else {
    window.location.href = '/login'
    return null
  }
}
