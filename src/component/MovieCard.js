import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ item }) => {
  const { genreName } = useSelector((state) => state.movie)
  const navigate = useNavigate();
  const detail = () => {
    navigate(`/movies/${item.id}`)
  }


  return <div className='card' onClick={detail}
    style={{
      backgroundImage:
        "url(" +
        `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}` +
        ")",
    }}>
    <div className='overlay'>
      <h1>{item.title}</h1>
      <div>{item.genre_ids.map((id) => <Badge bg="danger">{genreName.find(item => item.id == id).name}</Badge>)}</div>
      <div>
        <span>
          평점 : {item.vote_average}
        </span>
        <p>
          {item.adult ? "청소년불가" : "전체이용가"}
        </p>
      </div>
    </div>
  </div>
}

export default MovieCard
