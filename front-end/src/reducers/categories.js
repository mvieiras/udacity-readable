import { combineReducers } from 'redux'
  
// For Categories
const categories = (state = { categories: [] }, action) => {
    switch(action.type) {
      case 'GET_CATEGORIES':
        return {
          ...state,
          categories: action.categories
        }
      default:
        return state
    }
  }

export default combineReducers({categories})