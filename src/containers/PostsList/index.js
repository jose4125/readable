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
    console.log('render post')
    return (<PostItem key={post.id} data={post} />);
  }

  voteScoreSort(a, b) {
    console.log('voteScoreSort')
    return b.voteScore - a.voteScore;
  }

  render() {
    return (
      <ul>
        {this.props.posts.map(this.renderPosts)}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchCategoryPosts: category => dispatch(fetchCategoryPosts(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
