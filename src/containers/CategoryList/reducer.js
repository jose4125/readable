import { GET_CATEGORIES } from './constants';

const initialState = {
  categories: [],
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
}

export default categoriesReducer;
