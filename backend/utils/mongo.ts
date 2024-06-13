import mongoose, { Mongoose } from 'mongoose'
import { type dObject } from './types'

import config from '../config'

class MongoDB {
  mongodb_uri: string = ''
  db: Mongoose | null = null

  constructor(_config?:dObject) {
    if (!_config) {
      this.mongodb_uri = config.mongodb_uri
      return
    }

    const USER = encodeURIComponent(config.dbUser ?? '')
    const PASSWORD = encodeURIComponent(config.dbPassword ?? '')
    this.mongodb_uri = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
  }

  async connect() {
    if (!this.db) {
      mongoose.set('strictQuery', false)
      this.db = await mongoose.connect(this.mongodb_uri)
    }

    console.log('CLIENT CONNECTED TO DATABASE...')
    return this.db
  }

  getDB() {
    return this.db
  }
}

export default MongoDB