import {IAction} from "../interfaces";
import {USERS_ACTIONS_TYPES} from "./users-actions";
import {UserState} from "./user-state";

export const initialState: UserState = {
  email: '',
  familyName: '',
  givenName: '',
  googleId: '',
  imageUrl: '',
  name: '',
}

export const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case USERS_ACTIONS_TYPES.SET_USER_INFO: {
      return {...state, ...action.payload};
    }
    case USERS_ACTIONS_TYPES.RESET_USER_INFO: {
      return {...state, ...initialState};
    }
    default:
      return state;
  }
};
