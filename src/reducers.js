import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categoriesReducer from './containers/CategoryList/reducer';
import postsReducer from './containers/PostsList/reducer';
import filterReducer from './containers/Filters/reducer';
import postReducer from './containers/Post/reducer';
import commentsReducer from './containers/Comments/reducer';

export default combineReducers({
  router: routerReducer,
  categories: categoriesReducer,
  posts: postsReducer,
  filter: filterReducer,
  post: postReducer,
  comments: commentsReducer,
});
