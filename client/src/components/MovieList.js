import React from 'react';
import MovieListItem from './MovieListItem';

export default class MovieList extends React.Component {

  static propTypes = {
    movies: React.PropTypes.arrayOf(React.PropTypes.shape({}))
  }

  render() {

    let {
      movies
    } = this.props;

    let movieListItems = movies.map((movie) => (
      <MovieListItem
        key={movie.id}
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
