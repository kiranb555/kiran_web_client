import { handleActions } from 'redux-actions';
import { formInputHandler, formLoader, formReset, formSubmittedSuccessfully } from '../actions/contactActions';

const defaultState = {
  formData: {
    first_name: "",
    second_name: "",
    phone: "",
    email: "",
    message: "",
  },
  formLoader: false,
  formSubmittedSuccessfully : false
};



const contactReducer = handleActions({
  [formInputHandler]: (state,action) => ({
    ...state,
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.value,
        },
  }),
  [formReset]: (state,action) => ({
        ...state,
        formData: {
          first_name: "",
          second_name: "",
          phone: "",
          email: "",
          message: "",
      },
        formLoader: false
  }),
  [formLoader]: (state, action) => ({
    ...state,
    formLoader: action.payload
  }),
  [formSubmittedSuccessfully]: (state, action) => ({
    ...state,
    formSubmittedSuccessfully: action.payload
  }),
  },defaultState)

export default contactReducer;
