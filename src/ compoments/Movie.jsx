import React from 'react'
import NoImg from "../images/no_Img.png";

function Movie(props) {
    return (
      <div>
        <img
         
          src={
            props.poster_path == null
              ? NoImg
              : `https://image.tmdb.org/t/p/w500${props.poster}`
          }
          className="img-fluid img"
        ></img>
      </div>
    );
}

export default Movie
