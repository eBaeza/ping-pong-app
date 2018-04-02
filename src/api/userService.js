import { URL_BASE } from '../config/api'
import { BaseService } from "./BaseService"

export class UserService extends BaseService {
  static async index() {
    const response = await this.get(`${URL_BASE}/users`)
    const data = await response.json()
    return data
  }

  static async store(user) {
    const response = await this.post(`${URL_BASE}/users`, user)
    const data = await response.json()
    return data
  }
}
