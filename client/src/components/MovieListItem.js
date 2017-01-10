import React from 'react';
import 'whatwg-fetch';

export default class MovieListItem extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    overview: React.PropTypes.string,
    popularity: React.PropTypes.integer,
    posterPath: React.PropTypes.string
  }

  render() {

    let {
      title,
      overview,
      popularity,
      posterPath
    } = this.props;

    return (
      <div className="movie-list-item">
        <img src={"https://image.tmdb.org/t/p/w500/" + posterPath} />
        <div className="movie-list-item__text">
          <span className="movie-list-item__title">{title}</span>
          <br />
          <br />
          <span>{overview}</span>
          <br />
          <br />
          <span>Rating: {popularity}</span>
        </div>
      </div>
    );
  }
}
