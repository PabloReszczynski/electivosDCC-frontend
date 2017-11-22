import apisauce from 'apisauce'

const create = () => {
  // ------
  // Configuration
  // ------

  const api = apisauce.create({
    baseURL: 'https://electivosdcc.herokuapp.com',
    headers: {
      // 'Cache-Control': 'no-cache',
      // 'Content-Type': 'application/json'
    },
    timeout: 6000
  })

  // ------
  // Definitions
  // ------

  const fetchCourses = () => {
    return api.get('/courses')
  }

  const postLike = (comm_id) => {
    return api.post('/courses/comments/like', {id: comm_id})
  }

  // ------
  // Export
  // ------
  return {
    fetchCourses
  }
}

export default create()
