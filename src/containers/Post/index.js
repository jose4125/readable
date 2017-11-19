import React from 'react';
import { connect } from 'react-redux';

import { fetchPost, deletePost, vote } from './actions';
import CategoryList from '../CategoryList';
import Comments from '../Comments';
import Link from '../../components/Link';
import Button from '../../components/button';
import Date from '../../components/date';
import VoteScore from '../../components/VoteScore';


class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleVoteScore = this.handleVoteScore.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  handleDelete() {
    this.props.deletePost(this.props.match.params.id)
  }

  handleVoteScore(id, type) {
    this.props.vote({ option: type }, id, 'posts')
  }

  render() {
    const { title, author, timestamp, voteScore, body, id } = this.props.post;
    return (
      <div className="App">
        <header className="App-header">
          <CategoryList />
          <hr/>
        </header>
        <header className="App-header">
          <h2>{title}</h2>
          <p>author: {author}</p>
          <p>date: <Date timestamp={timestamp} /></p>
          <p>score: <VoteScore
            score={voteScore}
            type="post"
            onVoteUp={() => this.handleVoteScore(id, 'upVote')}
            onVoteDown={() => this.handleVoteScore(id, 'downVote')}
          /></p>
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
  vote: (options, id, type) => dispatch(vote(options, id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
