import React from 'react';

import CategoryList from '../CategoryList';
import PostsList from '../PostsList';
import Filters from '../Filters';
import Button from '../../components/button';


class Home extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Categories</h2>
          <CategoryList />
          <Button />
          <hr/>
          <Filters />
        </header>
        <hr/>
        <h2>Posts</h2>
        <PostsList />
      </div>
    );
  }
}

export default Home;
