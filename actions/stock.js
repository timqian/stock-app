import axios from 'axios';
import {requestSent, address} from './index';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export function receiveStock(stock) {
  return {
    type: RECEIVE_STOCK,
    stock,
  };
}

export function fetchStock(_id) {
  return function (dispatch) {
    dispatch(requestSent('going to fetchStock'));

    const addr = `${address}/Stocks/${_id}`;
    // console.log(addr);
    axios.get(addr, {
      params: {
        select: {
          name: 1,
          tags: 1,
        },
      }
    }).then(function (response) {
      // console.log(response.data);
      dispatch(receiveStock(response.data));
    }).catch(function (response) {
      console.log(response);
    });
  };
}
