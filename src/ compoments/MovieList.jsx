import React from 'react'
import NoImg from '../images/no_Img.png'

function MovieList(props) {

    const handelClick = (movieId) => {
      var url = `https://www.themoviedb.org/movie/` + movieId;
      window.location.href = url;
    };
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 ">
            <h4 className=" pt-4 mb-5 PopularMoviesTitle ">
              Popular Movies
            </h4>
          </div>

          {props.arrayName.map((movies, index) => {
            return (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-4 col-8 mb-4"
                onClick={() => handelClick(movies.id)}
              >
                <div className="image-container ">
                  <div className="overlay">
                    <img
                      src={
                        movies.poster_path == null
                          ? NoImg
                          : `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                      }
                      className="img-fluid img"
                    ></img>

                    <h3 className="mainTitle">{movies.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default MovieList
