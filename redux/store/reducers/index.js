import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import UserReducer from "./UserReducer";
export default combineReducers({
  todoReducer,
  UserReducer
});
