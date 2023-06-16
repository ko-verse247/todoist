import axios from 'axios'

const url = 'https://todoist-caden-api.onrender.com/task/'

export async function getTasks() {
  const response = await axios.get(url).catch((e) => {
    console.log(e)
  })
  return await response.data
}

export function deleteTask(_id) {
  axios.delete(url + _id).catch((e) => {
    console.log(e)
  })
}

export function markTaskComplete(_id) {
  axios.patch(url + _id).catch((e) => {
    console.log(e)
  })
}

export async function postTask(task) {
  const response = await axios.post(url, task).catch((e) => {
    console.log(e)
  })
  return await response.data
}
