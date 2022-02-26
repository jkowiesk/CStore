import UserActionTypes from "./user.types";

export const setAccount = (account) => ({
  type: UserActionTypes.SET_ACCOUNT,
  payload: account,
});
