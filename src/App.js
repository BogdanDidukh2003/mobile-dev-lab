import React from 'react';

import { Routes } from './navigation';
import { ThemeProvider } from './util';

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
