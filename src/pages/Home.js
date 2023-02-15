// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner'
import MovieSlid from '../component/MovieSlid'
import { movieAction } from '../redux/action/movieAction'
import ClipLoader from "react-spinners/ClipLoader";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(state => state.movie)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(movieAction.getMovives())
  }, [])
  if (loading) {
    return <ClipLoader
      color="#fe0b01" loading={loading} size={150} aria-label="Loading Spinner"
      data-testid="loader" />
  }
  //loading이 true면 lading스피너를 보여주고
  // lading이 false면 데이터를 보며주고

  //true:데이터 도착 전 (api도착 전)
  //flase 데이터 도착 후, 에러가 났을 때(api호출 후(프로미스올))



  // 렌더를 먼저 하고(retunr이하부터 먼저 하고 하는데 useEffect를 진행하기때문에 popularMovies.results[0]는
  // undfined결과가 나타난다. 조건부 렌더링을 시켜줘야한다.)
  return (
    <div>

      {/* popularMovies.results &&로 원래 조건부 렌더링을 해주었는데 로딩스피너로 대체가 되어 이젠 안해줘도 됨. */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Banner movie={popularMovies.results[0]}></Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner movie={popularMovies.results[1]}></Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner movie={popularMovies.results[2]}></Banner>
        </Carousel.Item>
      </Carousel>


      <h1>popular Movie</h1>
      <MovieSlid movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlid movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlid movies={upComingMovies} />










    </div>
  )
}

export default Home
