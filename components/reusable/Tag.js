import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Tag extends Component {

  render() {
    let { _id, tag } = this.props;
    const tagStyle = {
      fontSize: '80%',
      borderRadius: '1rem',
      background: 'rgb(28, 137, 184)',
      padding: '0.2em 0.6em 0.2em 0.6em',
      verticalAlign: 'baseline',
    };
    return (
      <span>
        <Link to={`/oneStock/${_id}/tagstocks/${tag}`}
          className="pure-button pure-button-primary"
          style={tagStyle}>
          {tag}
        </Link>
        &nbsp;
      </span>
    );
  }
}
