import React from 'react';
import Link from './Link';
import Button from './button';
import VoteScore from './VoteScore';

function PostItem(props) {
  const { voteScore, title, commentCount, category, id, author } = props.data;
  const url = `/${category}/${id}`;
  return (
    <div>
      <Link to={url}>{title}</Link>
      <p>author: {author}</p>
      <p>Score: <VoteScore
        score={voteScore}
        onVoteUp={props.handleVoteUp}
        onVoteDown={props.handleVoteDown}
      /></p>
      <p>Comments: {commentCount}</p>
      <p>Category: <a href={category}>{category}</a></p>
      <hr />
      <Link to={`/post/${id}/edit`}>EDIT POST</Link>
      <span> | </span>
      <Button onClick={props.handleDelete}>DELETE POST</Button>
      <hr/>
    </div>
  );
}

export default PostItem;
