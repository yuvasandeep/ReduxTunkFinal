// import { createStore } from "redux";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("token") ? true : false
};

const authReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN") {
    localStorage.setItem("token", action.payload.token);

    return {
      token: action.payload.token,
      isLoggedIn: !state.isLoggedIn
    };
  }
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("token");

    return {
      token: null,
      isLoggedIn: !state.isLoggedIn
    };
  }
  return state;
};
export default authReducer;

export const fetchSignInData = (
  url,
  enteredEmail,
  enteredPassword,
  history
) => {
  return async (dispatch) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      alert("Something wrong");
      return;
    }
    const data = await response.json();
    await dispatch({
      type: "LOG_IN",
      payload: {
        token: data.idToken
      }
    });
    await history();
  };
};
