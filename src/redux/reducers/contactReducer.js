import { handleActions } from 'redux-actions';
import { formInputHandler, formReset, formSubmit, formSubmitFailure, formSubmitSuccess } from '../actions/contactActions';

const defaultState = {
  formData: {
    first_name: "",
    second_name: "",
    phone: "",
    email: "",
    message: "",
  },
  fromSubmit: false,
  formSubmitSuccess: false,
  formSubmitFailure: false,
};



const contactReducer = handleActions({
  [formInputHandler]: (state,action) => ({
    ...state,
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.value,
        },
  }),
  [formSubmit]: (state,action) => ({
        ...state,
        fromSubmit: true,
        formData: {
          first_name: "",
          second_name: "",
          phone: "",
          email: "",
          message: "",
        },
  }),
  
  [formSubmitSuccess]: (state,action) => ({
        ...state,
        formSubmitSuccess: true,
        formSubmitFailure: false,
  }),
  [formSubmitFailure]: (state,action) => ({
        ...state,
        formSubmitSuccess: false,
        formSubmitFailure: true,
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
        fromSubmit: false,
        formSubmitSuccess: false,
        formSubmitFailure: false,
  })
  },defaultState)

export default contactReducer;
