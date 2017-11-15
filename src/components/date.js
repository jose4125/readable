import React from 'react';
import moment from 'moment';

function Date(props) {
  const date = moment(props.timestamp).format('ll');
  return (<span>{date}</span>);
}

export default Date;
