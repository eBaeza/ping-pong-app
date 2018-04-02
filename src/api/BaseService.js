
export class BaseService {
  static get(url) {
    return fetch(url, this.configRequest())
  }

  static post(url, data) {
    return fetch(url, this.configRequest('POST', data))
  }

  static configRequest(method = 'GET', data = null) {
    const token = localStorage.getItem('token')
    const options = {
      method,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }

    if (method !== 'GET' && data) {
      options.body = JSON.stringify(data)
    }

    return options
  }
}
