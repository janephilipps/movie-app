import React from 'react';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';
import SearchBar from '../components/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MovieDetail />
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
