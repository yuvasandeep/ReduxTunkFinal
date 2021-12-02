// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
import classes from "./MainNavigation.module.css";
// import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const { profileReducer: profiles, authReducer: auth } = useSelector(
    (state) => state
  );
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    dispatch({ type: "LOG_OUT" });
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Project</div>
      </Link>
      <nav>
        <ul>
          {/* {isLoggedIn && (
            <li>
              <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
            </li>
          )} */}

          {auth.isLoggedIn && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}

          {!auth.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {auth.isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {auth.isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
