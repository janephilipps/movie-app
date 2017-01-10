import React from 'react';

export default class SearchBar extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    value: React.PropTypes.string
  }

  _handleChange(e) {
    console.log('_handleChange');
    e.stopPropagation();
    this.props.onChange(e);
  }

  _handleSubmit(e) {
    console.log('_handleSubmit');
    e.stopPropagation();
    this.props.onSubmit(e);
  }

  render() {

    let {
      onChange,
      onSubmit,
      value
    } = this.props;

    return (
      <div className="search-bar-form">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" placeholder="search" value={value} onChange={this._handleChange.bind(this)} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}
