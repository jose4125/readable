import { GET_POST } from './constants';
import { fetchSinglePost } from '../../utils/api';

export const getPost = post => ({
  type: GET_POST,
  post,
});

export const fetchPost = id => dispatch => (
  fetchSinglePost(id)
    .then(post => dispatch(getPost(post.data)))
);
