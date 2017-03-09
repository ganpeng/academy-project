import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { SET_USER, api_root } from '../constants/';




export function signupRequest(user) {
  return dispatch => {
    return axios.post(`${api_root}/auth/signup`, user)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}





export function loginRequest(user) {
  return dispatch => {
    return axios.post(`${api_root}/auth/login`, user)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}



export function setUser(token) {
  let user;
  if(token) {
    localStorage.setItem('token', token);
    user = jwtDecode(token);
  } else {
    localStorage.removeItem('token');
    user = {};
  }
  return {
    type: SET_USER,
    user
  }
}

