//Actions
export const types = {
  SAVE_FORM_3: 'my-app/form/SAVE_FORM_3',
  SAVE_FORM_2: 'my-app/form/SAVE_FORM_2',
  SAVE_FORM_2_RESULT: 'my-app/form/SAVE_FORM_2_RESULT',
}

//Reducer
export default function reducer(state = {}, action = {}) {
  switch(action.type) {
    case types.SAVE_FORM_3:
      const { data } = action;
      return {
        ...state,
        form3: data
      }
    case types.SAVE_FORM_2_RESULT:
      return {
        ...state,
        form2: action.data
      }
    default:
      return state;
  }
}

//Action Creators
export function saveForm3(data) {
  return {
    type: types.SAVE_FORM_3,
    data
  }
}

export function saveForm2(data) {
  return {
    type: types.SAVE_FORM_2,
    data
  }
}