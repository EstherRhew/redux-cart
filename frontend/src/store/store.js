import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {applyMiddleware, compose, legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";

const initialState = {};

const middlewares = process.env.NODE_ENV === "production" ? [thunk] : [thunk, logger];

const enhancer = process.env.NODE_ENV === "prodcution"
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(...middlewares));

export default legacy_createStore(reducers, initialState, enhancer)