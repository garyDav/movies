import { AuditoriumModel } from '../models'

class AuditoriumServiceDB {
  findAll() {
    return AuditoriumModel.find()
  }

  async create(data) {
    const newMovie = new AuditoriumModel(data)

    return newMovie.save()
  }
}

export default AuditoriumServiceDB
