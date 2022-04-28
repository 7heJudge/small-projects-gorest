import { Pagination, User } from 'common/types/common.types';

export interface UsersRes {
  meta: PaginationWrapper;
  data: User[];
}

export interface UserByIdRes {
  meta: null;
  data: User;
}

interface PaginationWrapper {
  pagination: Pagination;
}
