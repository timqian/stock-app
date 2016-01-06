import axios from 'axios';
import {requestSent, address} from './index';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function receiveEvents(events) {
  return {
    type: RECEIVE_EVENTS,
    events,
  };
}

export function fetchEvents(_id) {
  return function (dispatch) {
    dispatch(requestSent('going to fetchEvents'));

    const addr = `${address}/Events`;
    axios.get(addr, {    //as: `?query={"tags":{"$in":["国企"]}}`
      params: {
        query: {
          stockId: _id
        },
        select: {
          group: 1,
          text: 1,
          start_date: 1,
          end_date: 1,
        },
      }
    }).then(function (response) {
      // console.log(response.data);
      dispatch( receiveEvents( response.data ) );
    }).catch(function (response) {
      // TODO: 这里是使用note.js 的好地方
      console.log(response);
    });
  };
}
