import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY
function getMovives() {
  return async (dispatch) => {

    try {
      dispatch({ type: "GET_MOVIES_REQUEST" })
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upComingMovies, genreName] = await Promise.all([
        popularMovieApi,
        topRatedMovieApi,
        upComingMovieApi,
        genreApi,
      ]);
      console.log("genreName?", genreName);
      //배열 하나하나에 각각 담았다.
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreName: genreName.data.genres,
        }
      })
    } catch (error) {
      //에러 핸들링 하는곳.
      dispatch({ type: "GET_MOVIES_FAIL" })
    }

    //이렇게 하면 딱 한번만 기다리고 3개를 동시에 받아오기때문에 속도도 느리지 않고 좋음.
  }
}
export const movieAction = {
  getMovives
}