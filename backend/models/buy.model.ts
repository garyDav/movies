import mongoose from 'mongoose'

const { Schema, model } = mongoose

const buySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  auditorium: {
    type: Schema.Types.ObjectId,
    ref: 'Auditorium',
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
})

export default model('Buy', buySchema)
