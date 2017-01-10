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
        title={movie.title}
        overview={movie.overview}
        popularity={movie.popularity}
        posterPath={movie.poster_path}
      />
    ));

    return (
      <div>
        <h1>Current Popular Movies</h1>
        <ul>{movieListItems}</ul>
      </div>
    );
  }
}
