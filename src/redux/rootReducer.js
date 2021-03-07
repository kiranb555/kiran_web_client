import { combineReducers } from "redux";
import aboutReducer from "./about/aboutReducer";
import contactReducer from "./contact/contactReducer";

const rootReducer = combineReducers({
  about: aboutReducer,
  contact: contactReducer,
});

export default rootReducer;
