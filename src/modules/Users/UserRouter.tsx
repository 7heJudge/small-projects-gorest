import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import styled from 'styled-components';

import EditUser from './pages/EditUser';
import UsersList from './pages/UsersList';

const UserRouter = () => {
  return (
    <UserRouterContainer>
      <Switch>
        <Route path=":userId" element={<EditUser />} />
        <Route path="*" element={<UsersList />} />
      </Switch>
    </UserRouterContainer>
  );
};

const UserRouterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export default UserRouter;
