import React from 'react';
import MovieDetail from '../components/MovieDetail';

export default class Detail extends React.Component {

  static propTypes = {
    id: React.PropTypes.number
  }

  state = {
    movie: {}
  }

  componentDidMount() {
    this._getMovieDetail(this.props.params.id);
  }

  getMovie = (id) => (
    fetch(`//localhost:8000/api/movie/${id}`)
      .then((res) => res.json())
  );

  _getMovieDetail = (id) => (
    this.getMovie(id)
      .then((movie) => {
        this.setState({movie});
      })
  );

  render() {
    return (
      <div>
        <MovieDetail
          title={this.state.movie.title}
          overview={this.state.movie.overview}
          tagline={this.state.movie.tagline}
          posterPath={this.state.movie.poster_path}
          releaseDate={this.state.movie.release_date}
          homepage={this.state.movie.homepage}
        />
      </div>
    );
  }
}
