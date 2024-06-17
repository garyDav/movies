import { AuditoriumModel } from '../models'

class AuditoriumServiceDB {
  findAll() {
    return AuditoriumModel.find()
  }

  async create(data: any) {
    const newMovie = new AuditoriumModel(data)

    return newMovie.save()
  }
}

export default AuditoriumServiceDB
