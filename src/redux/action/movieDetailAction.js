import { createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import api from "../api";
// import { movieDetailActions } from "../reducers/detailReducer"
const API_KEY = process.env.REACT_APP_API_KEY
function getDetail(id) {
  const asyncUpFetch = createAsyncThunk(
    'detailSlice/asynceUpFetch',
    async () => {
      const detailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`);

    }
  )
  console.log("id값 받아왔나요?", id)
  return async (dispatch) => {
    try {

      // dispatch({ type: "GET_MOVIES_DETAIL_REQUEST" })
      // const detailApi = api.get(
      //   `/movie/${id}?api_key=${API_KEY}&language=en-US`);
      const reviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
      const recommenApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
      const youtubeApi = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

      let [detailMovie, detailReview, detailRecom, detailYou] = await Promise.all([
        detailApi, reviewApi, recommenApi, youtubeApi,]);

      console.log("reviewApi은요?", detailReview)
      console.log("recommenApi은요?", detailRecom)
      console.log("youtubeApi은요?", detailYou)

      dispatch({
        type: "GET_MOVIE_DETAIL",
        payload: {
          detailMovie: detailMovie.data,
          detailReview: detailReview.data,
          detailRecom: detailRecom.data,
          detailYou: detailYou.data,
        }
      })
      // dispatch(movieDetailActions.getMovieDetail())
    } catch (error) {
      dispatch({ type: "GET_MOVIES_DETAIL_FAIL" })
    }
  }
}
export const movieDetailAction = {
  getDetail
}