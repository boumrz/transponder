export const SET_CATEGORY = 'SET_CATEGORY'

export function setCategory (category) {
  return dispatch => {
    dispatch({
      type: SET_CATEGORY,
      payload: category
    })
  }
}
