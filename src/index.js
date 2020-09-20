import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

const rootElement = document.getElementById("root");

const Routing = () => {
  const history = useHistory();
  let isLoggedIn = true;

  if (!isLoggedIn) {
    history.push("/");
    return <Login />;
  }
  return (
    <Switch>
      <Provider store={store}>
        <Route exact path="/">
          <App />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Provider>
    </Switch>
  );
};

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </Router>,
  rootElement
);
