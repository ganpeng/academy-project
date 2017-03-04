import { UPDATE_LEADER_PAGINATION } from '../constants/';

export function updateLeaderPagination(currentPage, pages) {
  return {
    type: UPDATE_LEADER_PAGINATION,
    currentPage,
    pages
  }
}


