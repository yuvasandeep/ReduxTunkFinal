import { Fragment, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import sample from "../sample.jpg";
import classes from "./AuthForm.module.css";
import { fetchSignInData } from "./Redux/loginSlice";
// import AuthContext from "./store/auth-context";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  // const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation
    if (enteredEmail !== "" && enteredPassword !== "") {
      setIsLoading(true);
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA56_SWI89wn91SCFtjnSP4i0jk5Hl6bDk";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA56_SWI89wn91SCFtjnSP4i0jk5Hl6bDk";
      }
      //   fetch(url, {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: enteredEmail,
      //       password: enteredPassword,
      //       returnSecureToken: true
      //     }),
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   })
      //     .then((res) => {
      //       setIsLoading(false);
      //       if (res.ok) {
      //         return res.json();
      //       } else {
      //         return res.json().then((data) => {
      //           let errorMessage = "Authentication Failed";
      //           if (data && data.error && data.error.message) {
      //             errorMessage = data.error.message;
      //           }
      //           // alert(errorMessage);
      //           throw new Error(errorMessage);
      //         });
      //       }
      //     })
      //     .then((data) => {
      //       dispatch({
      //         type: "LOG_IN",
      //         payload: {
      //           token: data.idToken
      //           // userName: data.email.split("@")[0],
      //           // email: data.email
      //         }
      //       });
      //       // authCtx.login(data.idToken); //token getting from firebase
      //       history.replace("/");
      //     })
      //     .catch((err) => {
      //       alert(err.message);
      //     });
      const runHistory = () => history.replace("/");
      dispatch(fetchSignInData(url, enteredEmail, enteredPassword, runHistory));
    } else {
      alert("err.message");
    }
  };

  return (
    <Fragment>
      <div className={classes.img}>
        <img src={sample} alt="sampleImage" width="30%" height="30%" />
        <section className={classes.auth}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Sending Requet...</p>}
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default AuthForm;
