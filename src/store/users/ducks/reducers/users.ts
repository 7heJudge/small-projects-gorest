import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pagination, User } from 'common/types/common.types';
import { fetchUsers, getUserById, updateUserById } from '../thunks/users';

type InitialState = {
  users: User[];
  currentUser: User | null;
  isLoading: boolean;
  pagination: Pagination | null;
  error: string;
};

const initialState: InitialState = {
  users: [],
  currentUser: null,
  isLoading: false,
  pagination: null,
  error: '',
};

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.pagination = action.payload.meta.pagination;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.currentUser = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getUserById.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateUserById.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserById.rejected, (state, action: PayloadAction<any>) => {
      const { field, message } = action.payload[0];
      state.error = `${field} ${message}`;
      state.isLoading = false;
    });
    builder.addCase(updateUserById.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const usersActions = users.actions;

export default users.reducer;
