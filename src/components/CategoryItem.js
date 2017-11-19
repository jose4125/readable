import React from 'react';
import Link from './Link'

function CategoryItem(props) {
  const { path, name } = props.data;
  return (<span><Link to={`/${path}`}>{name}</Link> | </span>);
}

export default CategoryItem;
