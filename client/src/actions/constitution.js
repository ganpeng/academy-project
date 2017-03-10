import axios from 'axios';

import { SET_CONSTITUTION, api_root } from '../constants/';


export function getConstitution() {
  return dispatch => {
    axios.get(`${api_root}/constitution/all`)
      .then((res) => res.data)
      .then((data) => {
        const { constitution } = data.result;
        dispatch(setConstitution(constitution));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}



export function createConstitutionRequest(constitution) {
  return dispatch => {
    return axios.post(`${api_root}/constitution`, constitution)
            .then((res) => res.data)
  }
}


export function updateConstitutionRequest(id, constitution) {
  return dispatch => {
    return axios.put(`${api_root}/constitution/${id}`, constitution)
            .then((res) => res.data)
  }
}




function setConstitution(constitution) {
  return {
    type: SET_CONSTITUTION,
    constitution
  }
}
