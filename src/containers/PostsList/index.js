import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchCategoryPosts, vote, deletePost } from './actions';

import PostItem from '../../components/PostItem';

class PostsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    if (this.props.filter) {
      this.props.fetchCategoryPosts(this.props.filter);
    } else {
      this.props.fetchPosts();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.props.fetchCategoryPosts(this.props.filter);
    }
  }

  handleDelete(id, category) {
    console.log('delete', id, category)
    this.props.deletePost(id, category);
  }

  handleVoteScore(id, type) {
    console.log('vote', id, { option: type }, this.props.pathName);
    this.props.vote({ option: type }, id, 'posts', this.props.pathName)
  }

  renderPosts(post) {
    console.log('props', this.props)
    return (<PostItem
      key={post.id}
      data={post}
      handleDelete={() => this.handleDelete(post.id, this.props.pathName)}
      handleVoteUp={() => this.handleVoteScore(post.id, 'upVote')}
      handleVoteDown={() => this.handleVoteScore(post.id, 'downVote')}
    />);
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
    pathName: state.router.location.pathname,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchCategoryPosts: category => dispatch(fetchCategoryPosts(category)),
  deletePost: (id, path) => dispatch(deletePost(id, path)),
  vote: (options, id, type, path) => dispatch(vote(options, id, type, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
