import { combineReducers } from "redux"
import detailReducer from "./detailReducer"
import moviesReducer from "./moviesReducer"

export default combineReducers({
  movie: moviesReducer,
  // detail: detailReducer,
})