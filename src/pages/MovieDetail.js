import React, { useEffect, useState } from 'react'
import { Badge, Button, Carousel, ListGroupItem, NavItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { movieDetailAction } from '../redux/action/movieDetailAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import 'react-multi-carousel/lib/styles.css';
import RecommendCard from '../component/RecommendCard';
import Trailer from '../component/Trailer';

const MovieDetail = () => {
  const { loading, detailMovie, detailReview, detailRecom, detailYou } = useSelector(state => state.detail);
  const { popularMovies } = useSelector(state => state.movie)
  console.log("detailMovie?", detailMovie)
  const { id } = useParams();
  const dispatch = useDispatch()
  const [hide, setHide] = useState(true);
  const getMovieDetail = () => {
    dispatch(movieDetailAction.getDetail(id))
    //id값 action으로 보내기
  }


  useEffect(() => {
    getMovieDetail()
  }, [])

  if (loading) {
    return <ClipLoader
      color="#fe0b01" loading={loading} size={150} aria-label="Loading Spinner"
      data-testid="loader" />
  }

  return (
    <div className='detail-info'>
      <div className='back-img'
        style={{
          backgroundImage:
            "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailMovie?.poster_path}` +
            ")",
          // {/* 이미지가 String타입으로 들어가야 인식이 됨. */ }
        }}></div>
      <section>
        <div className='detail-img'
          style={{
            backgroundImage:
              "url(" + `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailMovie?.poster_path}` +
              ")",
            // {/* 이미지가 String타입으로 들어가야 인식이 됨. */ }
          }}>
        </div>
        <div className='detail-scr'>
          <section className='scr'>
            <h3>{detailMovie?.title}</h3>
            <h6>{detailMovie?.genres.map((item) => (<Badge bg="danger" key={item.id}>{item.name}</Badge>))}</h6>
            <p></p>
            <h5><FontAwesomeIcon icon={faStar} />    {detailMovie?.vote_average}</h5>
            <h5><FontAwesomeIcon icon={faUsers} />   {detailMovie?.popularity}</h5>
            <div className='text'>{detailMovie?.overview}</div>
            <p></p>
            <h6><Badge bg="danger" >Release Day</Badge> {detailMovie?.release_date} </h6>
            <h6><Badge bg="danger" >Runtime </Badge> {detailMovie?.runtime} </h6>
            <Trailer title={detailMovie?.title} />
          </section>

          <section>
            <div>
              <Button variant="outline-danger" className="hideBtn" onClick={() => { setHide(!hide) }}>Riview</Button>
              <div>
                {hide && detailReview?.results.map((item) => (<div className='comment'>{'**' + item.author + '**'} : {item.content}</div>))}
              </div>
            </div>
          </section>
          {<RecommendCard item={detailRecom.results} />}
        </div>
      </section >

    </div >
  )
}

export default MovieDetail
