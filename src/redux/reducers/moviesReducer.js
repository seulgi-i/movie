let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  genreName: {},
  loading: true,
}
function moviesReducer(state = initialState, action) {
  let { type, payload } = action
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state, loading: true,
      }
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreName: payload.genreName,
        loading: false,
      }
    case "GET_MOVIES_FAIL":
      return {
        ...state,
        loading: false,
      }
    default:
      return { ...state }
  }
}

export default moviesReducer;