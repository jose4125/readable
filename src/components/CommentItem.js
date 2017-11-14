import React from 'react';
import CommentForm from '../containers/CommentForm';
import Button from './button';

function CommentItem(props) {
  const { author, body, voteScore, timestamp, id } = props.data;
  return (
    <div>
      <p>{author}</p>
      <p>date: {timestamp}</p>
      <p>score: {voteScore} </p>
      <p>{body}</p>
      <Button onClick={props.handleEdit}>EDIT COMMENT</Button>
      <span> | </span>
      <Button onClick={props.handleDelete}>DELETE COMMENT</Button>
      <hr/>
      <CommentForm id={id} parentId={props.parent} body={body} edit />
      <hr/>
    </div>
  );
}

export default CommentItem;
