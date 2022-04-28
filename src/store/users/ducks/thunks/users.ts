import { message } from 'antd';
import { createAsyncThunk } from '@reduxjs/toolkit';

import Users from 'api/users/users';
import { getUsersParams } from 'modules/Users/types';

export const fetchUsers = createAsyncThunk('getUsers', async (props: getUsersParams, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await Users.getUsers(props);
    return response;
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});

export const getUserById = createAsyncThunk('getUserById', async (userId: string, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await Users.getUserById(userId);
    return response;
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});

export const updateUserById = createAsyncThunk(
  'updateUser',
  async ({ data, navigate }: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await Users.updateUserById(data);
      message.success('Success!', 2);
      navigate('/users');
      return response;
    } catch (e: any) {
      return rejectWithValue(e.response.data.data);
    }
  },
);
