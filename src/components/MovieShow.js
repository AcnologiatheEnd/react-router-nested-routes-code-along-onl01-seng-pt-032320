import React from 'react';
 
const MovieShow = ({match, movies}) => {
 
  return (
    <div>
        <h3>{ movies[match.params.movieId].title }</h3>
        <p>{ movies[match.params.movieId].released}</p>
    </div>
  );
}
 
export default MovieShow;