import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from './actions';



import CategoryItem from '../../components/CategoryItem';

class CategoryList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCategories();
  }
  renderCategories(category) {
    return (<CategoryItem key={category.name} data={category} />);
  }
  render() {
    return (
      <nav>
        <div>
          <span><Link to="/">home</Link> | </span>
          {this.props.categories.map(this.renderCategories)}
        </div>
        <hr />
      </nav>
      
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
