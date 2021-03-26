import React from 'react';
import { Landing } from './components/index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div className="App">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
