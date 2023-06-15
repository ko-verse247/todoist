import axios from 'axios'

const url = 'http://localhost:3000'

export async function getTasks() {
  const response = await axios.get(url + '/task')
  return response.data
}

export function deleteTask(_id) {
  axios.delete(url + '/task/' + _id)
}

export function markTaskComplete(_id) {
  axios.patch(url + '/task/' + _id)
}

export async function postTask(task) {
  const response = await axios.post(url + '/task', task)
  return response.data
}
