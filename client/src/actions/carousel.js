import axios from 'axios';

import { SET_CAROUSELS, DELETE_CAROUSEL, UPDATE_CAROUSEL, api_root } from '../constants/';
import { updateCarouselPagination } from './pagination';


export function getCarousels(page) {
  return dispatch => {
    axios.get(`${api_root}/carousel/all/${page}`)
      .then((res) => res.data)
      .then((data) => {
        const { carousels, currentPage, pages, total } = data.result;
        console.log(data);
        dispatch(updateCarouselPagination(currentPage, pages, total));
        console.log('aaa')
        dispatch(setCarousels(carousels))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}


export function createCarousel(carousel) {
  return dispatch => {
    return axios.post(`${api_root}/carousel`, carousel)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}


export function deleteCarouselRequest(id) {
  return dispatch => {
    return axios.delete(`${api_root}/carousel/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}


export function updateCarouselRequest(id, carousel) {
  return dispatch => {
    return axios.put(`${api_root}/carousel/${id}`, carousel)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
  }
}



function setCarousels(carousels) {
  return {
    type: SET_CAROUSELS,
    carousels
  }
}


// export function deleteCarousel(id) {
//   return {
//     type: DELETE_LEADER,
//     id
//   }
// }

export function deleteCarousel(index) {
  return {
    type: DELETE_CAROUSEL,
    index
  }
}


export function updateCarousel(index) {
  return {
    type: UPDATE_CAROUSEL,
    index
  }
}

