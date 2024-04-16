import { createAction } from 'redux-actions';

export const blogFormInputHandler = createAction('BLOG_FORM_VALUES');
export const blogFormSubmit = createAction('BLOG_FORM_SUBMIT');
export const blogFormReset = createAction('BLOG_FORM_RESET');

export const blogFormLoader = createAction('BLOG_FORM_LOADER');
export const blogFormSubmittedSuccessfully = createAction('BLOG_FORM_SUBMITTED_SUCCESSFULLY');

export const blogGetData = createAction('BLOG_GET_DATA');
export const blogSetData = createAction('BLOG_SET_DATA');
export const blogLoader = createAction('BLOG_LOADER');