import mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      uppercase: true,
      trim: true,
      default: '',
    },
    fecha_nacimiento: {
      type: Date,
    },
    estado: {
      type: String,
      uppercase: true,
      enum: ['ACTIVADO', 'RETIRADO'],
      trim: true,
      default: 'ACTIVADO',
    },
    celular: {
      type: String,
    },
    role: {
      type: String,
      uppercase: true,
      enum: ['ADMIN', 'USER'],
      trim: true,
      default: 'USER',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

userSchema.plugin(paginate)

export default model('User', userSchema)
