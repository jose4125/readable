import { CHANGE_FILTER } from './constants';

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
})