import mongoose from 'mongoose'

const { Schema, model } = mongoose

const buySchema = new Schema({})

export default model('Buy', buySchema)
