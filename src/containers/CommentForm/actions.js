import { fetchPostComments } from '../Comments/actions';
import { saveComments, editComments } from '../../utils/api';

export const saveComment = comment => dispatch => (
  saveComments(comment).then(res => {
    return dispatch(fetchPostComments(res.data.parentId))
  })
)

export const editComment = (comment, id) => dispatch => (
  editComments(comment, id).then(res => {
    return dispatch(fetchPostComments(res.data.parentId));
  })
)
