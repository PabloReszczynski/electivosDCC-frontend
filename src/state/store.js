import { createStore } from 'redux';

const initialState = {
  electivos: [
    {
      comments: [{
        txt: '',
        votes: { up: 0, down: 0 }
      }]
    }
  ]
};

const store = createStore((state, action) => state);

export default store;
