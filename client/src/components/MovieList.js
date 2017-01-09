import 'whatwg-fetch';
import React from 'react';
import MovieListItem from './MovieListItem';

export default class MovieList extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    this._getPopularMovies();
  }

  getMovies = () => (
    fetch('//localhost:8000/api/popular')
      .then((res) => res.json())
      .then((body) => body.results)
  );

  _getMovies = () => (
    this.getMovies()
      .catch((ex) => console.error(ex))
  );

  _getPopularMovies = () => {
    return this._getMovies()
      .then((movies) => {
        this.setState({movies});
        console.log('state:' , this.state);
      })
  };

  render() {

    let movieListItems = this.state.movies.map((movie) => (
      <MovieListItem
        title={movie.title}
        overview={movie.overview}
        popularity={movie.popularity}
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
