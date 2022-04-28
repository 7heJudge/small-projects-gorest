import { message } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usersActions } from 'store/users/ducks/reducers/users';
import { AppDispatch, useAppSelector } from 'store/store';

const Snackbar = () => {
  const dispatch: AppDispatch = useDispatch();

  const error = useAppSelector((state) => state.users.reducers.error);

  useEffect(() => {
    if (error) {
      message.error(error, 2);
      dispatch(usersActions.clearErrors());
    }
  }, [error]);

  return <></>;
};

export default Snackbar;
