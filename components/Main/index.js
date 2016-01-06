import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchStock } from '../../actions';

class Main extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Link to='/oneStock/600059'>
          古越龙山
        </Link>
      </div>
    );
  }
}

function select() {
  return {};
}

export default connect(select)(Main);
