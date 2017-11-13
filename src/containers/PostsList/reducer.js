import { GET_POSTS, GET_CATEGORY_POSTS } from './constants';

const initialState = {
  posts: [],
}

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.posts };
    case GET_CATEGORY_POSTS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
}

export default postsReducer;
