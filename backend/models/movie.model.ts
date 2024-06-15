import mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const { Schema, model } = mongoose

const movieSchema = new Schema(
  {
    image: {
      type: String,
      trim: true,
      require: true,
    },
    day: {
      type: [String],
      require: true,
    },
    hour: {
      type: [String],
      require: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

movieSchema.plugin(paginate)

export default model('Movie', movieSchema)
