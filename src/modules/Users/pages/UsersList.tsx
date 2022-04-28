import { Pagination } from 'antd';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import Button from 'common/components/Button/Button';
import CustomSelect from 'common/components/CustomSelect/CustomSelect';
import Typography from 'common/components/Typography/Typography';
import UserCard from 'common/components/UserCard/UserCard';
import Spacer from 'common/components/Spacer/Spacer';
import { fetchUsers } from 'store/users/ducks/thunks/users';
import { AppDispatch, useAppSelector } from 'store/store';
import theme from 'theme/theme';
import { gendersUser } from 'utils/constants';

const UsersList = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedGender, setSelectedGender] = useState<string>('');

  const users = useAppSelector((state) => state.users.reducers.users);
  const pagination = useAppSelector((state) => state.users.reducers.pagination);
  const loading = useAppSelector((state) => state.users.reducers.isLoading);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleClickCard = (userId: number) => {
    navigate(`/users/${userId}`);
  };

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, gender: selectedGender }));
  }, [currentPage, selectedGender]);

  if (loading)
    return <Oval color={theme.colors.gray} height={100} secondaryColor={theme.colors.lightGray} />;

  return (
    <CardsContainer>
      <Spacer height={100} />
      <CustomSelect
        data={gendersUser}
        value={selectedGender}
        onChange={(e: string) => setSelectedGender(e)}
      />
      <Spacer height={30} />
      <Button
        label="Clear filters"
        onClick={() => setSelectedGender('')}
        borderRadius={50}
        bgColor={theme.colors.lightGray}
        labelColor={theme.colors.black}
        borderColor={theme.colors.black}
      />
      <Typography text="Users: " fontSize="fz36" fontWeight="bold" />
      {users.map((user) => (
        <div key={`Key for user list ${user.id}`} onClick={() => handleClickCard(user.id)}>
          <UserCard name={user.name} email={user.email} />
        </div>
      ))}
      <Spacer height={50} />
      {pagination && (
        <Pagination
          defaultCurrent={currentPage}
          total={pagination.total}
          pageSize={20}
          showSizeChanger={false}
          size="small"
          onChange={changePage}
        />
      )}
      <Spacer height={50} />
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default UsersList;
