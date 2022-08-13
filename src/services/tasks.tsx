import axios from 'axios'

const baseUrl = 'https://stark-oasis-69277.herokuapp.com'

export async function createTask(task: object) {
  const { data } = await axios.post(`${baseUrl}/api/tasks`, task)
  return data
}

export async function getTasks() {
  const { data } = await axios.get(`${baseUrl}/api/tasks`)
  return data
}

export async function toggleCompleted(id: string) {
  const { data } = await axios.put(`${baseUrl}/api/tasks/${id}`)
  return data
}

export async function deleteTask(id: string) {
  const { data } = await axios.delete(`${baseUrl}/api/tasks/${id}`)
  return data
}

export async function clearTasks() {
  const { data } = await axios.delete(`${baseUrl}/api/tasks`)
  return data
}
