import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import UserRouter from './modules/Users/UserRouter';

const Routes = () => {
  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/">
        <Route path="users/*" element={<UserRouter />} />
        <Route index element={<UserRouter />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Route>
    </Switch>
  );
};

export default Routes;
