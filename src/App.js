import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';
import { ThemeAppProvider, ThemeContext } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeAppProvider>
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <ThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </ThemeProvider>
          )
        }}
      </ThemeContext.Consumer>
    </ThemeAppProvider>
  );
}

export default App;
