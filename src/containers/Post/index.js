import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchPost, deletePost } from './actions';
import Comments from '../Comments';
import Link from '../../components/Link';
import Button from '../../components/button'


class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  handleDelete() {
    this.props.deletePost(this.props.match.params.id)
  }

  render() {
    const { title, author, timestamp, voteScore, body, id } = this.props.post;
    const date = moment(timestamp).format('ll');;
    return (
      <div className="App">
        <header className="App-header">
          <h2>{title}</h2>
          <p>author: {author}</p>
          <p>date: {date}</p>
          <p>score: {voteScore}</p>
          <Link to={`/post/${id}/edit`}>EDIT POST</Link>
          <span> | </span>
          <Button onClick={this.handleDelete}>DELETE POST</Button>
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
  deletePost: id => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
