import axios from 'axios'

const url = 'https://todoist-caden-api.onrender.com'
/**
 * Axios service to make requests to an API endpoint.
 * Accesses a MongoDB Database.
 * 
 */

/**
 * Gets all tasks from MongoDB
 * 
 * @returns All tasks from MongoDB
 */
export async function getTasks() {
  const response = await axios.get(url)
  return response.data
}

/**
 * Deletes task with specified _id
 * 
 * @param {String} _id 
 */
export function deleteTask(_id) {
  axios.delete(url + _id)
}

/**
 * Updates 'completed' field to true of specified _id
 * 
 * @param {String} _id 
 */
export function markTaskComplete(_id) {
  axios.patch(url + _id)
}

/**
 * Creates object and saves to MongoDB
 * 
 * @param {Object} task 
 * @returns Created task object
 */
export async function postTask(task) {
  const response = await axios.post(url, task)
  return response.data
}
