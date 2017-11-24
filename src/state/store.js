import { createStore } from 'redux';

const initialState = {
  electivos: []
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COURSES_SUCCESS':
      return {
        ...state,
        electivos: action.payload.courses
      }
      break
    case 'NEW_COMMENT':
      console.log(action.payload);    
      return {
        ...state,
        electivos: state.electivos.map(electivo => {
          if(electivo.id != action.payload.elec_id) {
            return electivo;
          } else {
            console.log(action.payload);
            return {
              ...electivo,
              comments: [
                ...electivo.comments, {
                  id: action.payload.comm_id,
                  txt: action.payload.comment,
                  votes: {
                    up: 0,
                    down: 0
                  }
                }
              ]
            }
          }
        }) 
      }
      break
    case 'POST_LIKE_SUCCESS':
      return {
        ...state,
        electivos: state.electivos.map(electivo => {
          if (electivo.id != action.payload.course_id) {
            return electivo
          } else {
            return {
              ...electivo,
              comments: electivo.comments.map(comment => {
                if (comment.id != action.payload.comment_id) {
                  return comment
                } else {
                  return {
                    ...comment,
                    votes: {
                      up: comment.votes.up + 1,
                      down: comment.votes.down
                    }
                  }
                }
              })
            }
          }
        })
      }
      break
      case 'POST_DISLIKE_SUCCESS':
      return {
        ...state,
        electivos: state.electivos.map(electivo => {
          if (electivo.id != action.payload.course_id) {
            return electivo
          } else {
            return {
              ...electivo,
              comments: electivo.comments.map(comment => {
                if (comment.id != action.payload.comment_id) {
                  return comment
                } else {
                  return {
                    ...comment,
                    votes: {
                      up: comment.votes.up,
                      down: comment.votes.down + 1
                    }
                  }
                }
              })
            }
          }
        })
      }
      break
  }
  return state
});

export const fetchCoursesSuccess = courses => ({
  type: 'FETCH_COURSES_SUCCESS',
  payload: {
    courses: courses
  }
})

export const newComment = (comment, comm_id, elec_id) => ({
  type: 'NEW_COMMENT',
  payload: {
    comment,
    comm_id,
    elec_id 
  }
})

export const postLikeSuccess = (course_id, comment_id) => ({
  type: 'POST_LIKE_SUCCESS',
  payload: {
    course_id,
    comment_id
  }
})

export const postDislikeSuccess = (course_id, comment_id) => ({
  type: 'POST_DISLIKE_SUCCESS',
  payload: {
    course_id,
    comment_id
  }
})

export default store;
