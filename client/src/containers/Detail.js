import React from 'react';
import MovieDetail from '../components/MovieDetail';

export default class Detail extends React.Component {

  static propTypes = {
    id: React.PropTypes.integer
  }

  state = {
    movie: {}
  }

  componentDidMount() {
    console.log('component mounted');
    console.log('id: ', this.props);
    this._getMovieDetail(this.props.params.id);
  }

  getMovie = (id) => {
    console.log('fetching movie')
    return fetch(`//localhost:8000/api/movie/${id}`)
      .then((res) => res.json())
  };

  _getMovie = (id) => {
    console.log('getting movie');
    return this.getMovie(id)
      .catch((ex) => console.error(ex))
  };

  _getMovieDetail = (id) => {
    console.log('getting movie detail')
    return this._getMovie(id)
      .then((movie) => {
        console.log('movie: ', movie);
        this.setState({movie});
        console.log('movie detail state:' , this.state.movie);
      })
  };

  render() {
    return (
      <div>
        <MovieDetail
          title={this.state.movie.title}
          overview={this.state.movie.overview}
          tagline={this.state.movie.tagline}
        />
      </div>
    );
  }
}