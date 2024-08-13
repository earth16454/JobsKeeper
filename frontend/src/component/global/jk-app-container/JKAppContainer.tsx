import { Layout } from 'antd';
import React from 'react';
import JKSidebar from '../jk-sidebar';
import JKNavbar from '../jk-navbar';

const { Content } = Layout;

export interface JKAppContainerProps {
  children?: React.ReactNode;
}

const JKAppContainer: React.FC<JKAppContainerProps> = ({ children }) => {
  return (
    <>
      <Layout>
        <JKNavbar />
        <Content>
          <Layout>
            <JKSidebar />
            <Content style={{ padding: '16px', minHeight: 'calc(100vh - 64px)' }}>{children}</Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default JKAppContainer;
