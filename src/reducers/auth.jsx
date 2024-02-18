import {
  LOGIN_FAILED,
  USER_LOADED_FAILED,
  LOGIN_SUCCESS,
  USER_LOADED_SUCCESS,
} from "../actions/types";
const initialState = {
  token: localStorage.getItem("token"),
  refresh: localStorage.getItem("refresh"),

  isAuthenticated: null,
  user: null,
};
const loginReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log("dd");
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      return {
        ...state,
        token: payload.accessToken,

        isAuthenticated: true,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case USER_LOADED_FAILED:
      return {
        ...state,
        user: null,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("refresh");
      localStorage.removeItem("token");
      return {
        token: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export { loginReducer };
