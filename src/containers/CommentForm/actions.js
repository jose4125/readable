import { fetchPostComments, changeDataSaved } from '../Comments/actions';
import { saveComments, editComments } from '../../utils/api';

export const saveComment = comment => dispatch => (
  saveComments(comment).then(res => {
    dispatch(changeDataSaved());
    dispatch(fetchPostComments(res.data.parentId));
  })
)

export const editComment = (comment, id) => dispatch => (
  editComments(comment, id).then(res => {
    dispatch(changeDataSaved());
    dispatch(fetchPostComments(res.data.parentId));
  })
)
