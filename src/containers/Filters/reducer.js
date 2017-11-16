import { CHANGE_FILTER } from './constants';

const initialState = {
  filter: '',
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export default filterReducer;