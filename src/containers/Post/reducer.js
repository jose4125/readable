import { GET_POST } from './constants';

const initialState = {
  postDetail: {},
  dataSaved: false,
};

function postReducer (state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, postDetail: action.post };
    case 'test':
      return { ...state, dataSaved: !state.dataSaved };
    default:
      return state;
  }
}

export default postReducer;
