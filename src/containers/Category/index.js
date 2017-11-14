import React from 'react';

import CategoryList from '../CategoryList';
import PostsList from '../PostsList';
import Filters from '../Filters';
import Link from '../../components/Link';


class Category extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Categories</h2>
          <CategoryList />
          <Link to="/create-post">CREATE POST</Link>
          <hr/>
          <Filters />
        </header>
        <hr/>
        <h2>Posts</h2>
        <PostsList filter={this.props.match.params.category} />
      </div>
    );
  }
}

export default Category;
