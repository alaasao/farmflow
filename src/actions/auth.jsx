import {
  LOGIN_FAILED,
  USER_LOADED_FAILED,
  LOGIN_SUCCESS,
  USER_LOADED_SUCCESS,
} from "./types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  console.log("aaaa");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    const res = await axios.post(
      "https://auth-alaa.onrender.com/api/auth/",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch {
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};
export const loadUser = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${token}`,
        Accept: "application/json",
      },
    };

    try {
      const res = axios.get(
        `https://auth-alaa.onrender.com/api/users/`,
        config
      );
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data.filter((e) => e.refreshToken === token)[0], // this is only because the endpoint gets all the users and not the specific one you need
      });
    } catch {
      dispatch({
        type: USER_LOADED_FAILED,
      });
    }
  }
};
