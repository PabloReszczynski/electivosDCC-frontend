import apisauce from 'apisauce'

const create = () => {
  // ------
  // Configuration
  // ------

  const BASE_URL = process.env.API_BASE_URL || 'http://localhost';
  const PORT = process.env.API_PORT || '8000';

  const api = apisauce.create({
    // baseURL: `${BASE_URL}:${PORT}`,
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
    return api.get('/courses').catch(console.error)
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
