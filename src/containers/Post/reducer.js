import { GET_POST } from './constants';

const initialState = {
  postDetail: {},
};

function postReducer (state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, postDetail: action.post };
    default:
      return state;
  }
}

export default postReducer;
