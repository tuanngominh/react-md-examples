//Actions
export const types = {
  SAVE_FORM: 'my-app/form/SAVE_FORM',
}

//Reducer
export default function reducer(state = {}, action = {}) {
  switch(action.type) {
    case types.SAVE_FORM:
      const { data } = action;
      return {
        ...state,
        data
      }
    default:
      return state;
  }
}

//Action Creators
export function saveForm(data) {
  return {
    type: types.SAVE_FORM,
    data
  }
}