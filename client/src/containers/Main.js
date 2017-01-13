import React from 'react';
import { hashHistory } from 'react-router';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Popular Movies',
      value: '',
      movies: [],
      searchTerm: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    this._update();
  }

  componentDidUpdate() {
    if (this.state.searchTerm && this.state.searchTerm !== this.props.location.query.query) {
      this._update();
    }
  }

  _update() {
    let url;
    if (this.props.location.query.query) {
      url = this._buildSearchUrl(this.props.location.query.query);
      this._setMovies(url);
      this.setState({searchTerm: this.props.location.query.query});
    } else {
      url = '//localhost:8000/api/popular';
      this._setMovies(url);
      this.setState({searchTerm: ''});
    }
  }

  _handleChange(e) {
    this.setState({value: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this._setMovies(this._buildSearchUrl(this.state.value));
    hashHistory.push(`search?query=${this.state.value}`);
    this.setState({searchTerm: this.state.searchTerm});
    this.setState({value: ''});
  }

  _buildSearchUrl(query) {
    return `//localhost:8000/api/search?query=${query}`;
  }

  getMovies = (url) => (
    fetch(url)
      .then((res) => res.json())
      .then((body) => body.results)
  );

  _setMovies = (url) => (
    this.getMovies(url)
      .then((movies) => {
        this.setState({movies});
      })
  );

  render() {
    return (
      <div>
        <SearchBar
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <MovieList
          movies={this.state.movies}
        />
      </div>
    );
  }
}
