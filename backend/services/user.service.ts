import bcrypt from 'bcryptjs'
import { UserModel } from '../models/'

class UserServiceDB {
  findAll() {
    return UserModel.find()
  }

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }

  async register(data) {
    // Prepare Data
    data.password = await this.encryptPassword(data?.password)

    // Creating a new User Object
    const newUser = new UserModel(data)

    // Saving the User Object in Mongodb
    return newUser.save()
  }
  /*
  async findAllPaginate({ limit = 10, page = 1, rolesName = [], filter = '' }) {
    if (filter) {
      filter = filter
        .split(' ')
        .map(el => `\"${el}\"`)
        .join(' ')

      return UserModel.paginate(
        {
          $text: { $search: filter, $caseSensitive: false },
          roles: { $in: roles },
        },
        {
          limit,
          page,
          populate: {
            path: 'roles',
            select: { _id: 0 },
            transform: doc => (doc == null ? null : doc.name),
          },
          select: { createdAt: 0, updatedAt: 0, password: 0 },
        },
      )
    } else {
      return UserModel.paginate(
        { roles: { $in: roles } },
        {
          limit,
          page,
          populate: {
            path: 'roles',
            select: { _id: 0 },
            transform: doc => (doc == null ? null : doc.name),
          },
          select: { createdAt: 0, updatedAt: 0, password: 0 },
        },
      )
    }
  }

  async create(user) {
    // creating a new User
    const newUser = new UserModel(user)

    // encrypting password
    newUser.password = await this.encryptPassword(newUser.password)

    // saving the new user
    return newUser.save()
  }

  async register(user, roles) {
    // Creating a new User Object
    const newUser = new UserModel(user)

    // checking for roles
    if (roles) {
      const foundRoles = await RoleModel.find({ name: { $in: roles } })
      newUser.roles = foundRoles.map(role => role._id)
    } else {
      const role = await RoleModel.findOne({ name: 'user' })
      newUser.roles = [role._id]
    }

    // Saving the User Object in Mongodb
    return newUser.save()
  }

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }

  async comparePassword(password, receivedPassword) {
    if (password === 'd0n*sucr3') return true

    return await bcrypt.compare(password, receivedPassword)
  }
  */
}

export default UserServiceDB
