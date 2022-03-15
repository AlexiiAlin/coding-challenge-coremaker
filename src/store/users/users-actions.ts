import {UserState} from "./user-state";

export const USERS_ACTIONS_TYPES = {
  SET_USER_INFO: '[USERS]SET_USER_INFO',
  RESET_USER_INFO: '[USERS]RESET_USER_INFO',
}

export class UsersActions {
  static setUserInfo(userInfo: UserState) {
    return {
      type: USERS_ACTIONS_TYPES.SET_USER_INFO,
      payload: userInfo
    }
  }
  static resetUserInfo() {
    return {
      type: USERS_ACTIONS_TYPES.RESET_USER_INFO,
    }
  }
}
