import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Tag from '../../reusable/Tag';

export default class StockLink extends Component {

  render() {
    // console.log(this.props.stock);
    let { _id, name, tags } = this.props.stock;

    tags = tags.map((tag) => {
      return (
        <Tag tag={tag} _id={_id}/>
      );
    });

    const stockStyle = {
      color: '#265778',
      display: 'inline-block',
      textDecoration: 'none',
    };

    return (
      <tr>
        <td>
          <span style={stockStyle}>
            <Link to={`/oneStock/${_id}`}
              style={stockStyle}>
              {name} <small>({_id})</small>
            </Link>
          </span>
        </td>
        <td>
          {tags}
        </td>
      </tr>
    );
  }
}
