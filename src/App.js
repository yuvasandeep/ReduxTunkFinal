import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import UserProfilePage from "./Pages/UserProfilePage";
// import AuthContext from "./Components/store/auth-context";
import { useSelector, useDispatch } from "react-redux";
import {
  sendProfileData,
  fetchProfileData
} from "./Components/Redux/actionSlice";

// import submitProfile from "./Components/form/submitProfile";
// let isInitial =true;
function App() {
  const { profileReducer: profile, authReducer: auth } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  // const authCtx = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendProfileData(profile));
  }, [profile, dispatch]);
  // console.log(auth.isLoggedIn);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {auth.isLoggedIn && <HomePage />}
          {!auth.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {!auth.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {auth.isLoggedIn && <UserProfilePage />}
          {!auth.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        )}
        <Route path="*">
          <Redirect to="/auth" />
        </Route>
        )}
      </Switch>
    </Layout>
  );
}
export default App;
