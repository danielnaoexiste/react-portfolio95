import { useContext } from 'react';

import '@react95/icons/icons.css';
import { GlobalStyle, ThemeProvider } from '@react95/core';

import { Page } from './components/Page';
import { Desktop } from './pages/Desktop';

import './App.css';
import { DesktopContext } from './context/DesktopContext';
import type { DesktopContextType } from './interfaces/desktop';

const App = () => {
  const { theme } = useContext(DesktopContext) as DesktopContextType;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Page>
        <Desktop />
      </Page>
    </ThemeProvider>
  );
};

export default App;
