import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import detailReducer from "./reducers/detailReducer";

import rootReducer from "./reducers"
// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    detail: detailReducer,
  }
})

export default store;