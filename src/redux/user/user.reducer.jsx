import UserActionTypes from "./user.types";

const INITAL_STATE = {
  account: null,
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
