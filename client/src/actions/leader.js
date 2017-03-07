import axios from 'axios';

import { SET_LEADERS, DELETE_LEADER, api_root } from '../constants/';
import { updateLeaderPagination } from './pagination';

export function getLeaders(page) {
  return dispatch => {
    axios.get(`${api_root}/leader/all/${page}`)
      .then((res) => res.data)
      .then((data) => {
        const { leaders, currentPage, pages, total } = data.result;
        dispatch(updateLeaderPagination(currentPage, pages, total));
        dispatch(setLeaders(leaders))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}


export function createLeader(leader) {
  return dispatch => {
    return axios.post(`${api_root}/leader`, leader)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}


export function deleteLeaderRequest(id) {
  return dispatch => {
    return axios.delete(`${api_root}/leader/${id}`)
      .then((res) => res.data)
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


// export function deleteLeader(id) {
//   return {
//     type: DELETE_LEADER,
//     id
//   }
// }

export function deleteLeader(index) {
  return {
    type: DELETE_LEADER,
    index
  }
}

