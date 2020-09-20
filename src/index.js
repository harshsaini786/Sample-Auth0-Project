import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Login";
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
  let isLoggedIn = false;

  if (!isLoggedIn) {
    history.push("/");
    return <Login />;
  }
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  );
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Routing />
      </React.StrictMode>
    </Provider>
  </Router>,
  rootElement
);
