import { GET_POSTS, GET_CATEGORY_POSTS } from './constants';
import { fetchAllPosts, fetchAllCategoryPosts } from '../../utils/api';

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
