import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3004'
const baseUrl = '/api/todos'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const remove = async (newObject) => {
  const idUrl = baseUrl + `/${newObject.id}`
  const response = await axios.delete(idUrl)
  return response.data
}

export default { getAll, create, remove }
