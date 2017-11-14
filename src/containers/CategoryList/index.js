import React from 'react';
import { connect } from 'react-redux';
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
      <ul>
        {this.props.categories.map(this.renderCategories)}
      </ul>
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
