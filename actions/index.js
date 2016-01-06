export const REQUEST_SENT = 'REQUEST_SENT';
export const address = 'http://localhost:3000/api/v1';

export function requestSent(info) {
  return {
    type: REQUEST_SENT,
    info,
  };
}

import {RECEIVE_STOCK, receiveStock, fetchStock} from './stock';
export {RECEIVE_STOCK, receiveStock, fetchStock};

import {RECEIVE_EVENTS, receiveEvents, fetchEvents} from './events';
export {RECEIVE_EVENTS, receiveEvents, fetchEvents};

import {RECEIVE_TAG_STOCKS,receiveTagStocks,fetchTagStocks} from './tagStocks';
export {RECEIVE_TAG_STOCKS, receiveTagStocks, fetchTagStocks};

import {RECEIVE_BIG_MONEYS, receiveBigMoneys,fetchBigMoneys} from './bigMoneys';
export {RECEIVE_BIG_MONEYS, receiveBigMoneys, fetchBigMoneys};

import {LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, signup, login, logout} from './auth';
export {LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, signup, login, logout};
