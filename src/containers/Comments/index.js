import React from 'react';
import { connect } from 'react-redux';

import { fetchPostComments, deleteComments, changeDataSaved, vote } from './actions';
import CommentItem from '../../components/CommentItem';
import CommentForm from '../../containers/CommentForm';
import Button from '../../components/button';


class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.renderComment = this.renderComment.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      addCommentIsOpen: false,
    };
  }
  componentDidMount() {
    this.props.fetchPostComments(this.props.id);
  }

  componentDidUpdate() {
    if (this.props.dataSaved) {
      this.setState({ addCommentIsOpen: false });
      this.props.changeDataSaved();
    }
  }

  deleteComment(id) {
    this.props.deleteComments(id);
  }

  handleVoteScore(id, type) {
    this.props.vote({ option: type }, id, 'comments')
  }

  renderComment(comment) {
    return (
      <CommentItem
        key={comment.id}
        data={comment}
        dataSaved={this.props.dataSaved}
        handleDelete={() => this.deleteComment(comment.id)}
        handleEdit={() => this.editComment(comment.id)}
        handleVoteUp={() => this.handleVoteScore(comment.id, 'upVote')}
        handleVoteDown={() => this.handleVoteScore(comment.id, 'downVote')}
      />
    );
  }

  handleAddComment() {
    this.setState({ addCommentIsOpen: !this.state.addCommentIsOpen });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Commets ({this.props.comments.length})</h2>
          <Button onClick={this.handleAddComment}>ADD COMMENT</Button>
          <hr/>
        </header>
        {this.state.addCommentIsOpen && <CommentForm parentId={this.props.id} />}
        <hr/>
        {this.props.comments.map(this.renderComment)}
      </div>
    );
  }
}

function sortComments(a, b) {
  return b.voteScore - a.voteScore;
}

const mapStateToProps = state => ({
  comments: (state.comments.postComments.length) ?
    state.comments.postComments.sort(sortComments) : [],
  dataSaved: state.post.dataSaved,
});

const mapDispatchToProps = dispatch => ({
  fetchPostComments: id => dispatch(fetchPostComments(id)),
  deleteComments: id => dispatch(deleteComments(id)),
  changeDataSaved: () => dispatch(changeDataSaved()),
  vote: (options, id, type) => dispatch(vote(options, id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
