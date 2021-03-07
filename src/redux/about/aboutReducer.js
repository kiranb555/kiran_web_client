import {
  GET_ABOUT_DATA,
  GET_ABOUT_DATA_FAILURE,
  GET_ABOUT_DATA_SUCCESS,
} from "./aboutTypes";

const initialState = {
  loading: false,
  aboutData: [],
  error: "",
};

const aboutReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ABOUT_DATA:
      return {
        ...state,
        loading: true,
        aboutData: [],
        error: "",
      };
    case GET_ABOUT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        aboutData: payload,
        error: "",
      };
    case GET_ABOUT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        aboutData: [],
        error: payload,
      };
    default:
      return state;
  }
};

export default aboutReducer;
