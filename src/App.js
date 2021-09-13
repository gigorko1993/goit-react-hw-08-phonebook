import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoutes";
import PublicRoute from "./components/Routes/PublicRoutes";
import "react-toastify/dist/ReactToastify.css";
import AuthBar from "./components/AuthBar";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "home-view" */)
);
const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView" /* webpackChunkName: "register-view" */
  )
);

const LoginView = lazy(() =>
  import("./views/LoginView/LoginView" /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import(
    "./views/ContactsView/ContactsView" /* webpackChunkName: "contacts-view" */
  )
);

const loader = (
  <Loader
    type="Circles"
    color="rgba(70, 70, 241, 0.5)"
    height={66}
    width={66}
  />
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <div className="main-container">
        <AuthBar />

        <Suspense fallback={loader}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    )
  );
};

export default App;
