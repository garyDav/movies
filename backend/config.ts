import dotenv from 'dotenv'

dotenv.config()

export default {
  dev: process.env.NODE_ENV !== 'production',

  mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/movie-db',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,

  authJwtSecret: process.env.AUTH_JWT_SECRET,
  authJwtTime: process.env.AUTH_JWT_TIME,
}