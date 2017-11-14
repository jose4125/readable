import React from 'react';

function Link(props) {
  return (<a href={props.to}>{props.children}</a>);
}

export default Link;