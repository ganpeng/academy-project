import { UPDATE_LEADER_PAGINATION, UPDATE_EXPERT_PAGINATION } from '../constants/';

export function updateLeaderPagination(currentPage, pages) {
  return {
    type: UPDATE_LEADER_PAGINATION,
    currentPage,
    pages
  }
}


export function updateExpertPagination(currentPage, pages) {
  return {
    type: UPDATE_EXPERT_PAGINATION,
    currentPage,
    pages
  }
}

