export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
}
