import React from 'react';

export default class MovieDetail extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    tagline: React.PropTypes.string,
    overview: React.PropTypes.string
  }

  state = {
    movie: {}
  }

  componentDidMount() {
    console.log('component mounted');
    let id = 328111;
    this._getMovieDetail(id);
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

    // let {
    //   title,
    //   tagline,
    //   overview
    // } = this.props;

    return (
      <div>
        <p>Title: {this.state.movie.title}</p>
        <p>Overview: {this.state.movie.overview}</p>
        <p>Tagline: {this.state.movie.tagline}</p>

      </div>
    );
  }
}
