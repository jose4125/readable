import { GET_CATEGORIES } from './constants';
import { fetchAllCategories } from '../../utils/api';

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch => (
  fetchAllCategories().then(categories => dispatch(getCategories(categories.data.categories)))
);
