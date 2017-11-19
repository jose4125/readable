import { push, goBack } from 'react-router-redux';
import { savePosts, editPosts } from '../../utils/api';

export const savePost = post => dispatch => (
  savePosts(post).then(res => {
    return dispatch(push('/'));
  })
);

export const editPost = (post, id, category) => dispatch => (
  editPosts(post, id).then(res => {
    return dispatch(goBack());
  })
);
