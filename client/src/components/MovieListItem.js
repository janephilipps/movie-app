import React from 'react';
import { Link } from 'react-router';

export default class MovieListItem extends React.Component {

  static propTypes = {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    overview: React.PropTypes.string,
    popularity: React.PropTypes.number,
    posterPath: React.PropTypes.string
  }

  render() {

    let {
      id,
      title,
      overview,
      popularity,
      posterPath
    } = this.props;

    return (
      <div className="movie-list-item">
        <img src={"https://image.tmdb.org/t/p/w500/" + posterPath} alt={title} />
        <div className="movie-list-item__text">
          <Link to={"/movie/" + id}>
            <span className="movie-list-item__title">{title}</span>
          </Link>
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
