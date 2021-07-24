import { createAction } from 'redux-actions';

export const formInputHandler = createAction('CONTACT_FORM_VALUES');
export const formSubmit = createAction('CONTACT_FORM_SUBMIT');
export const formSubmitSuccess = createAction('CONTACT_FORM_SUBMIT_SUCCESS');
export const formSubmitFailure = createAction('CONTACT_FORM_SUBMIT_FAILURE');
export const formReset = createAction('CONTACT_FORM_RESET');




