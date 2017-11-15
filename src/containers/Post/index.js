import React from 'react';
import { connect } from 'react-redux';

import { fetchPost } from './actions';
import Comments from '../Comments';
import Link from '../../components/Link';


class Post extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }
  render() {
    const { title, author, timestamp, voteScore, body, id } = this.props.post;
    return (
      <div className="App">
        <header className="App-header">
          <h2>{title}</h2>
          <p>author: {author}</p>
          <p>date: {timestamp}</p>
          <p>score: {voteScore}</p>
          <Link to={`/post/${id}/edit`}>EDIT POST</Link>
          <span> | </span>
          <Link to="">DELETE POST</Link>
          <hr/>
        </header>
        <p>{body}</p>
        <hr/>
        <hr/>
        {this.props.post.id && <Comments id={id} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post.postDetail,
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
