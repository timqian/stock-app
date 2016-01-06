import axios from 'axios';
import {requestSent, address} from './index';
export const RECEIVE_TAG_STOCKS = 'RECEIVE_TAG_STOCKS';

export function receiveTagStocks(tagStocks) {
  return {
    type: RECEIVE_TAG_STOCKS,
    tagStocks,
  };
}

export function fetchTagStocks(tag) {
  return function (dispatch) {
    dispatch(requestSent('going to fetchTagStocks'));

    const addr = `${address}/Stocks`;
    // console.log(tag);
    axios.get(addr,{    //as: `?query={"tags":{"$in":["国企"]}}`
      params: {
        query: {
          tags: {
            $in: [tag]
          }
        },
        select: {
          name: 1,
          tags: 1,
        },
      }
    }).then(function (response) {
      // console.log(response.data); //TODO: _id of data disappered???
      dispatch( receiveTagStocks( response.data ) );
    }).catch(function (response) {
      console.log(response);
    });
  };
}
