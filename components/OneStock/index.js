import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStock, fetchEvents, fetchBigMoneys } from '../../actions';
import StockInfo from './StockInfo';
import TreeView from './TreeView';

class OneStock extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch( fetchStock(params._id) );
  }

  // for router!! https://github.com/rackt/redux/issues/702
  componentWillReceiveProps(nextProps) {
    const { dispatch, params } = this.props;
    const nextId = nextProps.params._id;
    if (nextId !== params._id) {
      dispatch( fetchStock( nextId ) );
    }
  }

  render() {
    console.log(location);
    const { children } = this.props;
    const {_id, name, tags} = this.props.stock;

    return (
      <div >
        <StockInfo name = {name} _id={_id} tags={tags}/>

          <div className="pure-g">
            <div className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-4 pure-u-lg-1-5">
              <TreeView _id={_id}/>
            </div>
            <div className="pure-u-1 pure-u-sm-2-3 pure-u-md-3-4 pure-u-lg-4-5">
              {children}
            </div>
          </div>
      </div>
    );
  }
}

function select(state) {
  return {
    stock: state.stock,
  };
}

export default connect(select)(OneStock);
