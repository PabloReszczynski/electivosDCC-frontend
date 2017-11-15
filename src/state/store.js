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
  }
  return state
});

export const fetchCoursesSuccess = courses => ({
  type: 'FETCH_COURSES_SUCCESS',
  payload: {
    courses: courses
  }
})


export default store;
