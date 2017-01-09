import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import MovieListItem from '../components/MovieListItem';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
        <MovieListItem />
      </div>
    );
  }
}
