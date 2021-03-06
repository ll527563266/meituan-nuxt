import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy(async function (mobilePhone, password, done) {
  global.console.log('执行到这里了吗？')
  const where = {
    mobilePhone
  }
  const result = await UserModel.findOne(where)
  global.console.log(result)
  if (result !== null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

export default passport
