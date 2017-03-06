import axios from 'axios';

import { SET_CONSTITUTION, api_root } from '../constants/';


export function getConstitution() {
  return dispatch => {
    axios.get(`${api_root}/constitution/all`)
      .then((res) => res.data)
      .then((data) => {
        const { constitution } = data.result;
        dispatch(setConstitution(data.result.constitution));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}



function setConstitution(constitution) {
  return {
    type: SET_CONSTITUTION,
    constitution
  }
}
