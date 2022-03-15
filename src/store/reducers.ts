import {combineReducers} from "redux";
import {userReducer as user} from "./users/users-reducer";

export default combineReducers({
  user,
});
