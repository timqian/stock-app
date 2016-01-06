import React, { Component, PropTypes } from 'react';
import Tag from '../reusable/Tag';

export default class StockInfo extends Component {
  render() {
    const stockStyle = {
      color: '#784942',
      //'text-align': 'center',
      padding: '1.2em 0em 1.2em 2em',  // 上右下左
      borderBottom: '2px solid #ddd',
      background: '#fafafa'
    };

    let { name, _id, tags } = this.props;

    tags = tags.map((tag) => {
      return (
        <Tag tag={tag} _id={_id}/>
      );
    });

    return (
      <div style={stockStyle}>
        <h2 style={{margin:'0 0 0.5em 0'}}>{name} <small>({_id})</small></h2>
        <span >tags: </span>
        {tags}
        <Tag tag={'+'} />
      </div>
    );
  }
}
