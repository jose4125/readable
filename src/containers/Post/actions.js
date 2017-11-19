import { GET_POST } from './constants';
import { push } from 'react-router-redux';
import { fetchSinglePost, deletePosts, sendVote } from '../../utils/api';

export const getPost = post => ({
  type: GET_POST,
  post,
});

export const fetchPost = id => dispatch => (
  fetchSinglePost(id)
    .then(post => {
      if (Object.keys(post.data).length){
        return dispatch(getPost(post.data))
      }
      return dispatch(push('/notfound'));
    })
    .catch(() => {
      dispatch(push('/notfound'));
    })
);

export const deletePost = (id, path) => dispatch => (
  deletePosts(id).then(res => {
    return dispatch(push('/'));
  })
);

export const vote = (option, id, type) => dispatch => (
  sendVote(option, id, type)
    .then(res => dispatch(fetchPost(id)))
);
