import { Layout } from 'antd';
import React from 'react';
import JKSidebar from '../jk-sidebar';
import JKNavbar from '../jk-navbar';
import JKAppContainerContextProvider from './JKAppContainerContextProvider';
// import { useLocation } from 'react-router-dom';

const { Content } = Layout;

export interface JKAppContainerProps {
  children?: React.ReactNode;
}

const JKAppContainer: React.FC<JKAppContainerProps> = ({ children }) => {
  // const location = useLocation();
  // console.log("location:", location);
  
  return (
    <JKAppContainerContextProvider>
      <Layout>
        <JKNavbar />
        <Content>
          <Layout>
            <JKSidebar />
            <Content style={{ padding: '16px', minHeight: 'calc(100vh - 64px)' }}>
              {children}
            </Content>
          </Layout>
        </Content>
      </Layout>
    </JKAppContainerContextProvider>
  );
};

export default JKAppContainer;
