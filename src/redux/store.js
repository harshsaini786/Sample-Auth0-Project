import { createStore } from "redux";
import reducer from "./reducer";
import { loadState, saveState } from "./state";
import throttle from "lodash.throttle";

const store = createStore(reducer, loadState());

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
