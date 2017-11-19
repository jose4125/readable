import { GET_COMMENTS } from './constants';
import { fetchSinglePostComments, deleteSingleComment, sendVote } from '../../utils/api';

export const changeDataSaved = () => ({
  type: 'test'
})

export const getPostComments = comments => ({
  type: GET_COMMENTS,
  comments,
});

export const fetchPostComments = id => dispatch => (
  fetchSinglePostComments(id)
    .then(comments => dispatch(getPostComments(comments.data)))
);

export const deleteComments = id => dispatch => (
  deleteSingleComment(id)
    .then(res => dispatch(fetchPostComments(res.data.parentId)))
);

export const vote = (option, id, type) => dispatch => (
  sendVote(option, id, type)
    .then(res => dispatch(fetchPostComments(res.data.parentId)))
);
