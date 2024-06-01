import express, { json } from 'express'
import cors from 'cors'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import localStrategy from './utils/auth/local'

const app = express()
const port = process.env.PORT ?? 3000
const authJwtSecret = process.env.authJwtSecret ?? '578c9ab076e27c99e2a5bce69239aa92ce7179c93c0dddae09fe28c11ab699a5'
const authJwtTime = process.env.authJwtTime ?? '1h'

app.use(json())
app.use(cors())
app.use(passport.initialize())
passport.use(localStrategy)

app.post('/api/signin', async(req, res, next) => {
  passport.authenticate('local', (error: any, user: any) => {
    if (error) return next(error)

    req.login(user, { session: false }, async error => {
      if (error) return next(error)

      const payload = {
        _id: user['_id'],
        username: user['username'],
        role: user['role'],
      }
      const token = jwt.sign(payload, authJwtSecret, {
        expiresIn: authJwtTime,
      })

      res.setHeader('Authorization', `Bearer ${token}`)
      return res.status(200).json({
        message: 'signin successfully',
        data: payload,
      })
    })
  })(req, res, next)
})

app.post('/api/signup', async (req, res, next) => {
  const { body: _data } = req

  try {
    // const [token, data] = await service.signUp(_data, roles)
    const token = 'token'

    res.setHeader('Authorization', `Bearer ${token}`)
    return res.status(200).json({
      message: 'signup successfully',
      token,
    })
  } catch (err) {
    next(err)
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
