import axios from 'axios';
import { BASEURL } from '../config';
import { requestSent } from './index';
import notie from '../utils/notie';
import history from '../utils/history';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export function signupSuccess(name) {
  return {
    type: SIGNUP_SUCCESS,
    name,
  };
}

export function loginSuccess(name) {
  return {
    type: LOGIN_SUCCESS,
    name,
  };
}

export function logout() {
  // TODO: remove token
  return {
    type: LOGOUT,
  };
}

export function signup(email, name, password) {
  return function (dispatch) {
    dispatch( requestSent('try to signup') );
    axios.post(`${BASEURL}/signup`, { email, name, password })
    .then((res) => {
      dispatch( signupSuccess(name) );
      history.replaceState(null, '/');
      notie.alert(1, res.data.message, 2.5);
    }).catch((res) => {
      notie.alert(2, res.data.message, 2.5);
    });
  };
}

export function login(email, password/*, 原location*/) {
  return function (dispatch) {
    dispatch( requestSent('try to login') );
    axios.post(`${BASEURL}/login`, {email, password})
    .then((res) => {
      dispatch( loginSuccess(res.data.name) );
      history.replaceState(null, '/');
      notie.alert(1, res.data.message, 2.5);
    }).catch((res) => {
      notie.alert(2, res.data.message, 2.5);
    });
  };
}
