import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Snackbar from './common/components/Snackbar/Snackbar';

function App() {
  return (
    <Router>
      <Snackbar />
      <Routes />
    </Router>
  );
}

export default App;
