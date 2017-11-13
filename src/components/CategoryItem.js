import React from 'react';

function CategoryItem(props) {
  const { path, name } = props.data;
  return (<div><a href={path}>{name}</a></div>);
}

export default CategoryItem;
