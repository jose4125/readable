import React from 'react';
import CommentForm from '../containers/CommentForm';
import Button from './button';
import Date from './date'

class CommentItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      editCommentIsOpen: false,
    };
  }

  componentDidUpdate() {
    if (this.props.dataSaved) {
      this.setState({ editCommentIsOpen: false });
    }
  }

  handleEdit() {
    this.setState({
      editCommentIsOpen: !this.state.editCommentIsOpen,
    });
  }

  render() {
    const { author, body, voteScore, timestamp, id } = this.props.data;
    return (
      <div>
        <p>{author}</p>
        <p>date: <Date timestamp={timestamp} /></p>
        <p>score: {voteScore} </p>
        <p>{body}</p>
        <Button onClick={this.handleEdit}>EDIT COMMENT</Button>
        <span> | </span>
        <Button onClick={this.props.handleDelete}>DELETE COMMENT</Button>
        <hr/>
        {this.state.editCommentIsOpen && <CommentForm id={id} parentId={this.props.parent} body={body} edit />}
        <hr/>
      </div>
    )
  }
}

export default CommentItem;
