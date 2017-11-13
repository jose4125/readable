import React from 'react';

function PostItem(props) {
  const { voteScore, title, commentCount, category, id } = props.data;
  return (
    <div>
      <a href={id}>{title}</a>
      <p>Score: {voteScore}</p>
      <p>Comments: {commentCount}</p>
      <p>Category: <a href={category}>{category}</a></p>
      <hr/>
    </div>
  );
}

export default PostItem;
