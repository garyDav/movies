import { Strategy } from 'passport-local'
import { UserService } from '../../services/'

const userService = new UserService()

const localStrategy = new Strategy(
  {
    session: false,
  },
  async function (username, password, done) {
    try {
      const userFound = await userService.findByUsername(username)

      if (!userFound) return done('Error: Auth', false)

      const matchPassword = await userService.comparePassword(
        password,
        userFound.password,
      )

      if (!matchPassword) return done('Error: Auth', false)

      return done(null, userFound)
    } catch (error) {
      return done(error)
    }
  },
)

export default localStrategy

