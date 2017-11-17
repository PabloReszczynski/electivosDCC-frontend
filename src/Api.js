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

  const sendComment = (id, comment) => {
    return api.post('/courses/comments', {id, comment})
  }

  // ------
  // Export
  // ------
  return {
    fetchCourses,
    sendComment
  }
}

export default create()
