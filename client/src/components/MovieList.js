import 'whatwg-fetch';
import React from 'react';
import MovieListItem from './MovieListItem';

export default class MovieList extends React.Component {

  static propTypes = {
    movies: React.PropTypes.arrayOf(React.PropTypes.shape({}))
  }

  render() {

    let movieListItems = this.props.movies.map((movie) => (
      <MovieListItem
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        popularity={movie.popularity}
        posterPath={movie.poster_path}
      />
    ));

    return (
      <div>
        <ul>{movieListItems}</ul>
      </div>
    );
  }
}
