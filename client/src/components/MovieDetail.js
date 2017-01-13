import React from 'react';
import { Link } from 'react-router';

export default class MovieDetail extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    tagline: React.PropTypes.string,
    overview: React.PropTypes.string,
    posterPath: React.PropTypes.string,
    releaseDate: React.PropTypes.string,
    homepage: React.PropTypes.string
  }

  render() {

    let {
      title,
      tagline,
      overview,
      posterPath,
      releaseDate,
      homepage
    } = this.props;

    return (
      <div className="movie-list-item">
        <img src={"https://image.tmdb.org/t/p/w500/" + posterPath} alt={title} />
        <div className="movie-list-item__text">
          <a href={homepage} target="_blank">
            <span className="movie-list-item__title">{title}</span>
          </a>
          <br />
          <br />
          <span>{tagline}</span>
          <br />
          <br />
          <span>{overview}</span>
          <br />
          <br />
          <span>Released: {releaseDate}</span>
        </div>
      </div>
    );
  }
}
