import axiosInstance from '../index';
import { UserByIdRes, UsersRes } from './dto/getUsers.dto';
import { User } from 'common/types/common.types';
import { getUsersParams } from 'modules/Users/types';

class Users {
  getUsers = async (props: getUsersParams): Promise<UsersRes> => {
    const { page = 1, gender } = props;
    const response = await axiosInstance.get('public/v1/users', {
      params: { page, gender },
    });

    return response.data as UsersRes;
  };

  getUserById = async (userId: string): Promise<UserByIdRes> => {
    const response = await axiosInstance.get(`public/v1/users/${userId}`);

    return response.data as UserByIdRes;
  };

  updateUserById = async (data: User): Promise<UserByIdRes> => {
    const response = await axiosInstance.patch(`public/v1/users/${data.id}`, data);

    return response.data as UserByIdRes;
  };
}

export default new Users();
