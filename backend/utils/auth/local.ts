import { Strategy } from 'passport-local'

const localStrategy = new Strategy(
  {
    session: false,
  },
  async function (username, password, done) {
    try {
      const userFound = { _id: 1, username, password, name: 'Alvarito', role: 'admin' }

      if (!userFound) return done('Error: Auth', false)

      const matchPassword = true

      if (!matchPassword) return done('Error: Auth', false)

      return done(null, userFound)
    } catch (error) {
      return done(error)
    }
  },
)

export default localStrategy