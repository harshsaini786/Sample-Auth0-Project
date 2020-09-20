import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./Components/NavBar";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

const DOMAIN_NAME = "harshsaini.us.auth0.com";
const CLIENT_ID = "8IG0lqb2O40ksM0LD596RMtV3pX8USCK";

const rootElement = document.getElementById("root");

const Routing = () => {
  const history = useHistory();
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    history.push("/");
    return <Login />;
  }
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));

  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Provider>
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN_NAME}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <Router>
      <React.StrictMode>
        <NavBar>
          <Routing />
        </NavBar>
      </React.StrictMode>
    </Router>
  </Auth0Provider>,
  rootElement
);
