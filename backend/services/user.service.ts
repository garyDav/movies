import bcrypt from 'bcryptjs'
import { UserModel } from '../models/'

class UserServiceDB {
  findAll() {
    return UserModel.find()
  }

  async encryptPassword(password: any) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }

  async register(data: any) {
    // Prepare Data
    data.password = await this.encryptPassword(data?.password)

    // Creating a new User Object
    const newUser = new UserModel(data)

    // Saving the User Object in Mongodb
    return newUser.save()
  }

  findByUsername(username: string) {
    const query = { username, estado: { $ne: 'RETIRADO' } }

    return UserModel.findOne(query)
  }

  comparePassword(password: string, receivedPassword: string) {
    return bcrypt.compare(password, receivedPassword)
  }
}

export default UserServiceDB
