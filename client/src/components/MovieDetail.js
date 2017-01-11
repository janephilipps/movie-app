import React from 'react';

export default class MovieDetail extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    tagline: React.PropTypes.string,
    overview: React.PropTypes.string
  }

  render() {

    let {
      title,
      tagline,
      overview
    } = this.props;

    return (
      <div>
        <p>Title: {title}</p>
        <p>Overview: {overview}</p>
        <p>Tagline: {tagline}</p>
      </div>
    );
  }
}
