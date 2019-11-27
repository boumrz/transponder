import {
  SET_CATEGORY_EVENTS,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  CHOOSE_EVENT,
  DELETE_EVENT
} from '../actions/eventsAction'

export const initialState = {
  events: [],
  eventsCategory: 'all',
  isFetching: false,
  event: []
}

export function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_EVENTS:
      return { ...state, eventsCategory: action.payload }

    case GET_EVENTS_REQUEST:
      return { ...state, events: action.payload, isFetching: true }

    case GET_EVENTS_SUCCESS:
      return { ...state, events: action.payload, isFetching: false }

    case CHOOSE_EVENT:
      return { ...state, event: action.payload }

    case DELETE_EVENT:
      return { ...state, events: action.payload }

    default:
      return state
  }
}
