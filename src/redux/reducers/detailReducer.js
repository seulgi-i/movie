import { createSlice } from "@reduxjs/toolkit"
import { buildQueries } from "@testing-library/react";

let initialState = {
  detailMovie: [],
  detailReview: [],
  detailRecom: [],
  detailYou: [],
  loading: true,
}
// function detailReducer(state = initialState, action) {
//   let { type, payload } = action
//   switch (type) {
//     case "GET_MOVIES_DETAIL_REQUEST":
//       return {
//         ...state,
//         loading: true,
//       }
//     case "GET_MOVIE_DETAIL":
//       return {
//         ...state,
//         detailMovie: payload.detailMovie,
//         detailReview: payload.detailReview,
//         detailRecom: payload.detailRecom,
//         detailYou: payload.detailYou,
//         loading: false,
//       }
//     case "GET_MOVIES_DETAIL_FAIL":
//       return {
//         ...state,
//         loading: false,
//       }
//     default:
//       return { ...state }
//   }
// }


// export default detailReducer

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getRequestDetail(state, action) {
      state.loading = true;
    },
    getMovieDetail(state, action) {
      state.detailMovie = action.payload.data;
      state.detailReview = action.payload.data;
      state.detailRecom = action.payload.data;
      state.detailYou = action.payload.data;
      state.loading = false;
    },
    getMovieFail(state, action) {
      state.loading = false;
    }
  },
  extraReducers: (builder) => {

  }
});

console.log("pppp detailSlice", detailSlice);

export const movieDetailActions = detailSlice.actions
export default detailSlice.reducer