import {
  CONTACT_FORM_VALUES,
  CONTACT_FORM_SUBMIT,
  CONTACT_FORM_SUBMIT_SUCCESS,
  CONTACT_FORM_SUBMIT_FAILURE,
  CONTACT_FORM_RESET,
} from "./contactTypes";

const initialState = {
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

const contactReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_FORM_VALUES:
      return {
        ...state,
        formData: {
          ...state.formData,
          [payload.key]: payload.value,
        },
      };
    case CONTACT_FORM_SUBMIT:
      return {
        ...state,
        fromSubmit: true,
      };
    case CONTACT_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        formSubmitSuccess: true,
        formSubmitFailure: false,
      };
    case CONTACT_FORM_SUBMIT_FAILURE:
      return {
        ...state,
        formSubmitSuccess: false,
        formSubmitFailure: true,
      };

    case CONTACT_FORM_RESET:
      return {
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
      };
    default:
      return state;
  }
};

export default contactReducer;
