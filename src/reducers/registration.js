import { SET_CATEGORY } from '../actions/categoryActions'

const initialState = {
  category: 'student'
}

export function registrationReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload }

    default:
      return state
  }
}
