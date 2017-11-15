import { GET_POST } from './constants';
import { push } from 'react-router-redux';
import { fetchSinglePost, deletePosts } from '../../utils/api';

export const getPost = post => ({
  type: GET_POST,
  post,
});

export const fetchPost = id => dispatch => (
  fetchSinglePost(id)
    .then(post => dispatch(getPost(post.data)))
);

export const deletePost = id => dispatch => (
  deletePosts(id).then(res => {
    return dispatch(push('/'));
  })
);
