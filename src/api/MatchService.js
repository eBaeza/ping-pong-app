import { URL_BASE } from '../config/api'
import { BaseService } from './BaseService'

export class MatchService extends BaseService {
  static async index() {
    const response = await this.get(`${URL_BASE}/matches`)
    const data = await response.json()
    return data
  }

  static async show(id) {
    const response = await this.get(`${URL_BASE}/matches/${id}`)
    const data = await response.json()
    return data
  }

  static async store(match) {
    const response = await this.post(`${URL_BASE}/matches`, match)
    const data = await response.json()
    return data
  }
}
