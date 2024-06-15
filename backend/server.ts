import express, { json } from 'express'
import cors from 'cors'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import config from './config'
import MongoDB from './utils/mongo'
import localStrategy from './utils/auth/local'
import { UserService, MovieService, AuditoriumService } from './services/'

const app = express()
const port = process.env.PORT ?? 3000
const authJwtSecret =
  process.env.authJwtSecret ??
  '578c9ab076e27c99e2a5bce69239aa92ce7179c93c0dddae09fe28c11ab699a5'
const authJwtTime = process.env.authJwtTime ?? '1h'

app.use(json())
app.use(cors())
app.use(passport.initialize())
passport.use(localStrategy)

// Services
const userService = new UserService()
const movieService = new MovieService()
const auditoriumService = new AuditoriumService()

// Authenticate
app.post('/api/signin', async (req, res, next) => {
  passport.authenticate('local', (error, user) => {
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
    const data = await userService.register(_data)

    return res.status(200).json({
      message: 'signup successfully',
      data,
    })
  } catch (err) {
    next(err)
  }
})

// Users
app.get('/api/users', async (req, res, next) => {
  try {
    const data = await userService.findAll()

    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

// Movies
app.get('/api/movies', async (req, res, next) => {
  try {
    const data = await movieService.findAll()

    return res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
})
app.post('/api/movies', async (req, res, next) => {
  const { body: _data } = req

  try {
    const data = await movieService.create(_data)

    return res.status(200).json({
      message: 'Movie create successfully',
      data,
    })
  } catch (err) {
    next(err)
  }
})

// Auditorium
app.get('/api/auditorium', async (req, res, next) => {
  try {
    const data = await auditoriumService.findAll()

    return res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
})
app.post('/api/auditorium', async (req, res, next) => {
  const { body: _data } = req

  try {
    const data = await auditoriumService.create(_data)

    return res.status(200).json({
      message: 'Auditorium create successfully',
      data,
    })
  } catch (err) {
    next(err)
  }
})

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`)
  const {
    dbUser = 'root',
    dbPassword = 'example',
    dbHost = 'localhost',
    dbPort = '27017',
    dbName = 'module-db',
  } = config

  const db = new MongoDB({ dbUser, dbPassword, dbHost, dbPort, dbName })
  await db.connect()
})
