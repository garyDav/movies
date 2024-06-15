import mongoose from 'mongoose'

const { Schema, model } = mongoose

const auditoriumSchema = new Schema({
  num_auditorium: {
    type: Number,
    require: true,
  },
  seat: [
    {
      num_seat: Number,
      state: Boolean,
    },
  ],
})

export default model('Auditorium', auditoriumSchema)
