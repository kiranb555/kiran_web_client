import axios from "axios";
import {
  GET_ABOUT_DATA,
  GET_ABOUT_DATA_FAILURE,
  GET_ABOUT_DATA_SUCCESS,
} from "./aboutTypes";

export const getAboutData = () => {
  return {
    type: GET_ABOUT_DATA,
  };
};

export const getAboutDataSuccess = (users) => {
  return {
    type: GET_ABOUT_DATA_SUCCESS,
    payload: users,
  };
};

export const getAboutDataFailure = (error) => {
  return {
    type: GET_ABOUT_DATA_FAILURE,
    payload: error,
  };
};

export const fetchActions = () => {
  return (dispatch) => {
    dispatch(getAboutData);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(getAboutDataSuccess(users));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(getAboutDataSuccess(errorMsg));
      });
  };
};
