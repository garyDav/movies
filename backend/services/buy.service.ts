import { BuyModel } from '../models/'

class BuyServiceDB {
  async create(data: any) {
    const newBuy = new BuyModel(data)

    return newBuy.save()
  }
}

export default BuyServiceDB
