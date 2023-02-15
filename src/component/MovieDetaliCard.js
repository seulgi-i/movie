import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetaliCard = ({ item }) => {
  const { genreName } = useSelector(state => state.movie);
  const navigate = useNavigate();
  const detail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (

    <div className="card2" onClick={detail}
      style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}` + ")",
      }}>

      <div className="overlayTitle">
        <h2 style={{
          backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` + ")",
        }}>
        </h2>
        <h1>  {item.title} </h1>
        <div>{item.genre_ids.map((id) => <Badge
          bg="danger"> {genreName.find(item => item.id == id).name}</Badge>)}
        </div>

        <div className="overlay2">

          <FontAwesomeIcon icon={faStar} /> {item.vote_average}
          <div>
            <span>
              {item.adult ? (<img width={30}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBWVdvR0q3rDm8F7cUED7yoDlj_9Fq3Mekg&usqp=CAU" />) : "전체이용가"}
            </span>
            <p>
              {item.overview}
            </p>

          </div>

        </div>

      </div>
    </div>);
};

export default MovieDetaliCard;