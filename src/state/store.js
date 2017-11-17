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
      return {
        ...state,
        electivos: state.electivos.map(electivo => {
          if(electivo.id != action.payload.id) {
            return electivo;
          } else {
            return {
              ...electivo,
              comments: [
                ...electivo.comments, {
                  id: -1,
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
  }
  return state
});

export const fetchCoursesSuccess = courses => ({
  type: 'FETCH_COURSES_SUCCESS',
  payload: {
    courses: courses
  }
})

export const newComment = (comment, id) => ({
  type: 'NEW_COMMENT',
  payload: {
    comment, id 
  }
})

export default store;
