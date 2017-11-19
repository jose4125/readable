import React from 'react';

function VoteScore(props) {
  return (
    <span>
      <button onClick={props.onVoteDown}>-</button>
        <span> {props.score} </span>
      <button onClick={props.onVoteUp}>+</button>
    </span>
  );
}

export default VoteScore;