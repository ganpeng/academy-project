import axios from 'axios';

import { SET_CONSTITUTION } from '../constants/';


export function getConstitution() {
  return dispatch => {
    axios.get(`http://localhost:3001/constitution/all`)
      .then((res) => res.data)
      .then((data) => {
        const { constitution } = data.result;
        console.log(constitution);
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
