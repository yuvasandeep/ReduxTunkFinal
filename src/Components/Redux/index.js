// import { act } from "react-dom/test-utils";
import { createStore, applyMiddleware, combineReducers } from "redux";
import profileReducer from "./profileSlice";
import authReducer from "./loginSlice";
import thunk from "redux-thunk";

// const store = createStore(profileReducer, applyMiddleware(thunk));

const rootReducer = combineReducers({ profileReducer, authReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
