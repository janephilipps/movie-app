import React from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
