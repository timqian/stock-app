import { combineReducers } from 'redux';
import {
  REQUEST_SENT, // general
  LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, // auth
  RECEIVE_STOCK, RECEIVE_TAG_STOCKS, RECEIVE_EVENTS, RECEIVE_BIG_MONEYS // data
} from './actions';

function username(state = null, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.name;
    case SIGNUP_SUCCESS:
      return action.name;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_SENT:
      return true;
    case RECEIVE_STOCK:
    case RECEIVE_TAG_STOCKS:
      return false;   // TODO: 可以删掉吗？
    default:
      return false;
  }
}

function stock(state = {}, action) {
  switch (action.type) {
    case RECEIVE_STOCK:
      return action.stock;
    default:
      return state;
  }
}

function tagStocks(state = [], action) {
  switch (action.type) {
    case RECEIVE_TAG_STOCKS:
      return action.tagStocks;
    default:
      return state;
  }
}

function events(state = [], action) {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
}

function bigMoneys(state = [], action) {
  switch (action.type) {
    case RECEIVE_BIG_MONEYS:
      return action.bigMoneys;
    default:
      return state;
  }
}
const stockApp = combineReducers({
  username,
  isFetching,
  stock,
  tagStocks,
  events,
  bigMoneys,
});

export default stockApp;
