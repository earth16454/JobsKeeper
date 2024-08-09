import React from 'react';
import { ConfigProvider } from 'antd';
import customizeTheme from './config/CustomizeTheme';
import GlobalStyles from './assests/styled/GlobalStyles';
import './assests/styled/globalStyles.css';
import JKAppContainer from './component/global/jk-app-container/JKAppContainer';
import Routing from './Routing';

function App() {
  return (
    <ConfigProvider {...customizeTheme}>
      <GlobalStyles />
      <JKAppContainer>
        <Routing />
      </JKAppContainer>
    </ConfigProvider>
  );
}

export default App;
