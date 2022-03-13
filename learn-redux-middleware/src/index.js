import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import loggerMiddleware from "./lib/loggerMiddleware";
import rootReducer from "./modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
