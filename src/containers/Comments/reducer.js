import { GET_COMMENTS } from './constants';
import { SEND_COMMENT } from '../CommentForm/constants';

const initialState = {
  postComments: {},
};

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, postComments: action.comments };
    case SEND_COMMENT:
      return { ...state, postComments: [...state.postComments, action.comment] };
    default:
      return state;
  }
}

export default commentsReducer;
