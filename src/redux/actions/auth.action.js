import firebase from "firebase/compat/app";

import auth from "../../firebase";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOG_OUT,
} from "../actionTypes";

export function login() {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

      const res = await auth.signInWithPopup(provider);
      const accessToken = res.credential.accessToken;
      const profile = {
        name: res.additionalUserInfo.profile.name,
        photoURL: res.additionalUserInfo.profile.picture,
      };
      sessionStorage.setItem("ytapp-clone-access-token", accessToken);
      sessionStorage.setItem("ytapp-clone-user", JSON.stringify(profile));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,
      });
      dispatch({
        type: LOAD_PROFILE,
        payload: profile,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  };
}

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });
  sessionStorage.removeItem("ytapp-clone-access-token");
  sessionStorage.removeItem("ytapp-clone-user");
};
