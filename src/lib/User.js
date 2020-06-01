import jwt from 'jsonwebtoken'

export function getUserId() {
  const token = localStorage.getItem('token')
  const decoded = jwt.decode(token)

  return decoded.id
}