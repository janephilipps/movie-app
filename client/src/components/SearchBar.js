import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      movies: []
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({value: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this._searchQueryMovies(this.state.value);
    this.setState({value: ''});
  }

  searchMovies = (query) => {
    console.log('searchMovies');
    return fetch('//localhost:8000/api/search?query=' + query)
      .then((res) => res.json())
      .then((body) => body.results)
  };

  _searchMovies = (query) => {
    console.log('_searchMovies');
    return this.searchMovies(query)
      .catch((ex) => console.error(ex))
  };

  _searchQueryMovies = (query) => {
    console.log('searchQueryMovies');
    return this._searchMovies(query)
      .then((movies) => {
        this.setState({movies});
        console.log('state:' , this.state);
      })
  };

  render() {

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="text" placeholder="search" value={this.state.value} onChange={this._handleChange} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}
