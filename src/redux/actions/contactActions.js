import { createAction } from 'redux-actions';

export const formInputHandler = createAction('CONTACT_FORM_VALUES');
export const formSubmit = createAction('CONTACT_FORM_SUBMIT');
export const formReset = createAction('CONTACT_FORM_RESET');

export const formLoader = createAction('CONTACT_FORM_LOADER');
export const formSubmittedSuccessfully = createAction('CONTACT_FORM_SUBMITTED_SUCCESSFULLY');