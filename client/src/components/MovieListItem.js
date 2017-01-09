import React from 'react';
import 'whatwg-fetch';

export default class MovieListItem extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    overview: React.PropTypes.string,
    popularity: React.PropTypes.integer
  }

  render() {

    let {
      title,
      overview,
      popularity
    } = this.props;

    return (
      <div>
        <p>Title: {title}</p>
        <p>Overview: {overview}</p>
        <p>Popularity: {popularity}</p>
      </div>
    );
  }
}
