import axios from 'axios';

import { SET_EXPERTS, api_root, DELETE_EXPERT } from '../constants/';
import { updateExpertPagination } from './pagination';

export function getExperts(page) {
  return dispatch => {
    axios.get(`${api_root}/expert/all/${page}`)
      .then((res) => res.data)
      .then((data) => {
        const { experts, currentPage, pages, total } = data.result;
        dispatch(updateExpertPagination(currentPage, pages, total));
        dispatch(setExperts(experts))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}


export function createExpertRequest(expert) {
  return dispatch => {
    return axios.post(`${api_root}/expert`, expert)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}


export function deleteExpertRequest(id) {
  return dispatch => {
    return axios.delete(`${api_root}/expert/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}


export function updateExpertRequest(id, expert) {
  return dispatch => {
    return axios.put(`${api_root}/expert/${id}`, expert)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}






function setExperts(experts) {
  return {
    type: SET_EXPERTS,
    experts
  }
}


export function deleteExpert(index) {
  return {
    type: DELETE_EXPERT,
    index
  }
}

