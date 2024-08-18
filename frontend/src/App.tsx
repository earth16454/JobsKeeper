import React from 'react';
import { ConfigProvider } from 'antd';
import customizeTheme from './config/CustomizeTheme';
import GlobalStyles from './assests/styled/GlobalStyles';
import Routing from './Routing';
import JKConfigContextProvider from './context/global/JKConfigContextProvider';

function App() {
  return (
    <ConfigProvider {...customizeTheme}>
      <JKConfigContextProvider>
        <GlobalStyles />
        <Routing />
      </JKConfigContextProvider>
    </ConfigProvider>
  );
}

export default App;
