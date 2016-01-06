import axios from 'axios';
import {requestSent, address} from './index';
export const RECEIVE_BIG_MONEYS = 'RECEIVE_BIG_MONEYS';

export function receiveBigMoneys(bigMoneys) {
  return {
    type: RECEIVE_BIG_MONEYS,
    bigMoneys,
  };
}

export function fetchBigMoneys(_id) {
  return function (dispatch) {
    dispatch(requestSent('going to fetch BigMoneys'));
    const addr = `${address}/BigMoneys`;
    axios.get(addr, {
      params: {
        query: {
          stockId: _id
        },
        select: {
          riqi: 1,
          shoupanjia: 1,
          zhangdiefu: 1,
          zhuliliuru: 1,
          zhanbi: 1,
        },
      }
    }).then(function (response) {
      dispatch( receiveBigMoneys( response.data ) );
    }).catch(function (response) {
      throw new Error(response);
    });
  };
}
