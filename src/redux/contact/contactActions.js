import axios from "axios";
import {
  CONTACT_FORM_VALUES,
  CONTACT_FORM_SUBMIT,
  CONTACT_FORM_SUBMIT_SUCCESS,
  CONTACT_FORM_SUBMIT_FAILURE,
  CONTACT_FORM_RESET,
} from "./contactTypes";

export const formInputHandler = ({ key, value }) => {
  return {
    type: CONTACT_FORM_VALUES,
    payload: { key, value },
  };
};

const formSubmit = () => {
  return {
    type: CONTACT_FORM_SUBMIT,
  };
};
const formSubmitSuccess = () => {
  return {
    type: CONTACT_FORM_SUBMIT_SUCCESS,
  };
};

const formSubmitFailure = () => {
  return {
    type: CONTACT_FORM_SUBMIT_FAILURE,
  };
};

const formReset = () => {
  return {
    type: CONTACT_FORM_RESET,
  };
};

export const forSubmitHandler = () => {
  return (dispatch) => {
    console.log("started posting...");
    dispatch(formSubmit());
    // add post data url
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: {
          title: "foo",
          body: "bar",
          usetId: 1,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(formSubmitSuccess());
        // resetting form data
        setTimeout(() => dispatch(formReset()), 5000);
      })
      .catch((err) => {
        console.log(err);
        dispatch(formSubmitFailure());
        // resetting form data
        setTimeout(() => dispatch(formReset()), 5000);
      });
  };
};
