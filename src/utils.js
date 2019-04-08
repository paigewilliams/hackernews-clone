const jwt = require('jsonwebtoken')
const APP_SECRET = 'graphQL-is-the-shit'

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('not authenticated boo!!')
}

module.exports = {
  APP_SECRET,
  getUserId,
}