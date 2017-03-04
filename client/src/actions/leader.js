import axios from 'axios';

import { SET_LEADERS } from '../constants/';
import { updateLeaderPagination } from './pagination';

export function getLeaders(page) {
  return dispatch => {
    axios.get(`http://localhost:3001/leader/all/${page}`)
      .then((res) => res.data)
      .then((data) => {
        const { leaders, currentPage, pages } = data.result;
        dispatch(updateLeaderPagination(currentPage, pages));
        dispatch(setLeaders(leaders))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}


function setLeaders(leaders) {
  return {
    type: SET_LEADERS,
    leaders
  }
}


