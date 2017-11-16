import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchCategoryPosts } from './actions';

import PostItem from '../../components/PostItem';

class PostsList extends React.PureComponent {
  componentDidMount() {
    if (this.props.filter) {
      this.props.fetchCategoryPosts(this.props.filter);
    } else {
      this.props.fetchPosts();
    }
  }

  renderPosts(post) {
    return (<PostItem key={post.id} data={post} />);
  }

  sortPosts(posts) {
    if (this.props.sort === '' || this.props.sort === 'score'){
      return posts.sort((a, b) => b.voteScore - a.voteScore);
    }
    return posts.sort((a, b) => b.timestamp - a.timestamp);
  }

  render() {
    const sortedPosts = this.sortPosts(this.props.posts);
    return (
      <ul>
        {sortedPosts && sortedPosts.map(this.renderPosts)}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts,
    sort: state.filter.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchCategoryPosts: category => dispatch(fetchCategoryPosts(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
