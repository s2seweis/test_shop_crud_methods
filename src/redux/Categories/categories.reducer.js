import categoriesTypes from './categories.types';
import categoryTypes from './categories.types';

const INITIAL_STATE = {
  categories: [],
  category: {},
};

const categoriesReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case categoryTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      case categoriesTypes.SET_CATEGORY:
        return {
        ...state,
        category: action.payload
      }
    default:
      return state;
  }
};

export default categoriesReducer;