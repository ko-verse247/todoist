import axios from 'axios'

const url = 'task/'

export async function getTasks() {
  const response = await axios.get(url)
  return response.data
}

export function deleteTask(_id) {
  axios.delete(url + _id)
}

export function markTaskComplete(_id) {
  axios.patch(url + _id)
}

export async function postTask(task) {
  const response = await axios.post(url, task)
  return response.data
}
