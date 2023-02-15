import logo from './logo.svg';
import { Route, Routes, useParams } from 'react-router-dom';
import React from 'react';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*
  1. 3개 페이지 필요 홈페이지, movie페이지, movieDetail페이지
  2. 홈페이지에서 배너를 볼 수 있다.
  3. (popular영화, top rated 영화, upcoming영화)3가지 섹션의 영화를 볼 수 있다.
  4. 각 영화에 마우스를 올려두면, 제목, 장르, 평점, 인기도, 청불여부
  5. 영화를 슬라이드로 넘기면서 볼 수 있다.

  6. 영화를 클릭하면 디테일 페이지로 넘어가서 정보를 볼 수 있다. (포스터, 제목, 줄거리, 점수, 인기도, 철부여부, 예산, 이익, 러닝타임 등등)
  7. triler를 누르면 trailer를 볼 수 있다.
  8. 영화의 리뷰도 볼 수 있다.
  9. 관련 영화도 볼 수 있다.
  10. 검색가능
  11. sort가능
  12. 필터링 가능
*/
function App() {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div >
  );
}

export default App;
