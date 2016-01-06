import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTagStocks } from '../../../actions/index';
import StockLink from './StockLink';

class TagStocks extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch( fetchTagStocks( params.tag ) );
  }

  // for router!! https://github.com/rackt/redux/issues/702
  componentWillReceiveProps(nextProps) {
    const { dispatch, params } = this.props;
    const nextTag = nextProps.params.tag;
    if (nextTag !== params.tag) {
      dispatch( fetchTagStocks( nextTag ) );
    }
  }

  render() {
    const { tagStocks } = this.props;

    const list = tagStocks.map(stock =>
      <StockLink stock={stock} />
    );

    const tbStyle = {
      width: '100%',
    };

    return (
      <div>
        <table className="pure-table pure-table-horizontal" style={tbStyle}>
          <thead>
            <tr>
              <th>相关股票</th>
              <th>tags</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

function select(state) {
  return {
    tagStocks: state.tagStocks,
  };
}

export default connect(select)(TagStocks);
