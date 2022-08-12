import axios from 'axios'
const baseUrl = 'https://stark-oasis-69277.herokuapp.com'

export async function getTasks() {
  const { data } = await axios.get(`${baseUrl}/api/tasks`)
  return data
}
