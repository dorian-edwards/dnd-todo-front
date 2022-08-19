import axios from 'axios'

const baseUrl = '/api/tasks'

// dev testing
//const baseUrl = 'http://localhost:3001'

export async function createTask(newTask: object) {
  const data = await axios.post(baseUrl, newTask)

  return data
  // const { task, taskOrder } = data
  // return { task, taskOrder, status }
}

export async function getTasks() {
  const { data } = await axios.get(baseUrl)
  return data
}

export async function toggleCompleted(id: string) {
  const { data } = await axios.put(`${baseUrl}/${id}`)
  return data
}

export async function deleteTask(id: string) {
  const { data } = await axios.delete(`${baseUrl}/${id}`)
  return data
}

export async function clearTasks() {
  const { data } = await axios.delete(baseUrl)
  return data
}

export async function moveTask(
  id: string,
  source: number,
  destination: number
) {
  const { data } = await axios.put(
    `${baseUrl}/${id}/switch?sourceIndex=${source}&destinationIndex=${destination}`
  )

  return data
}
