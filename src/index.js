import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import s from './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className={s} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
