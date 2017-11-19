import { GET_POSTS, GET_CATEGORY_POSTS } from './constants';
import { fetchAllPosts, fetchAllCategoryPosts, sendVote } from '../../utils/api';

export const getPosts = posts => ({
  type: GET_POSTS,
  posts,
});

export const fetchPosts = () => dispatch => (
  fetchAllPosts().then(posts => dispatch(getPosts(posts.data)))
);

export const getCategoryPosts = posts => ({
  type: GET_CATEGORY_POSTS,
  posts,
});

export const fetchCategoryPosts = category => dispatch => (
  fetchAllCategoryPosts(category)
    .then(posts => dispatch(getCategoryPosts(posts.data)))
);

export const vote = (option, id, type, path) => dispatch => (
  sendVote(option, id, type)
    .then(res => {
      if (path === '/') {
        return dispatch(fetchPosts());
      }
      return dispatch(fetchCategoryPosts(path.slice(1)));
    })
);
