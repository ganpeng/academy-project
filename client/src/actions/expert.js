import axios from 'axios';

import { SET_EXPERTS } from '../constants/';
import { updateExpertPagination } from './pagination';

export function getExperts(page) {
  return dispatch => {
    axios.get(`http://localhost:3001/expert/all/${page}`)
      .then((res) => res.data)
      .then((data) => {
        const { experts, currentPage, pages } = data.result;
        dispatch(updateExpertPagination(currentPage, pages));
        dispatch(setExperts(experts))
      })
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


