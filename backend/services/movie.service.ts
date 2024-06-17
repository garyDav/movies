import { MovieModel } from '../models/'

class MovieServiceDB {
  findAll() {
    return MovieModel.find()
  }

  async create(data: any) {
    const newMovie = new MovieModel(data)

    return newMovie.save()
  }
}

export default MovieServiceDB
