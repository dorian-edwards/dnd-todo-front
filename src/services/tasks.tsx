import axios from 'axios'
const baseUrl = 'https://stark-oasis-69277.herokuapp.com'

export async function getTasks() {
  const { data } = await axios.get(`${baseUrl}/api/tasks`)
  return data
}

export async function toggleCompleted(id: string) {
  const { data } = await axios.put(`${baseUrl}/api/tasks/${id}`)
  return data
}
