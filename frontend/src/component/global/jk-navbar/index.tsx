import { Avatar, Layout, Menu, Row, Typography } from 'antd';
import { CodeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { headerMenuItems } from '../../../config/HeaderMenu';

const { Header } = Layout;

const JKNavbar: React.FC = () => {
  return (
    <>
      <Header
        style={{
          boxShadow: 'var(--header-box-shadow)',
          zIndex: 1,
        }}
      >
        <Row align="middle" justify={'space-between'}>
          <Typography.Title level={4} style={{ margin: 0, color: 'var(--rgb-primary)' }}>
            JobsKeeper
          </Typography.Title>
          {/* <Menu mode="horizontal" items={headerMenuItems} style={{ borderBottom: 'none' }}></Menu> */}
          <Menu mode="horizontal" style={{ borderBottom: 'none' }}>
            <Row align={'middle'}>
              <Typography>Thanaphong Songsisai</Typography>
              <Menu.SubMenu title={<Avatar icon={<UserOutlined />} />}>
                <Menu.Item key="project">
                  <CodeOutlined /> Projects
                </Menu.Item>
                <Menu.Item key="about-us">
                  <UserOutlined /> Profile
                </Menu.Item>
                <Menu.Item key="log-out">
                  <LogoutOutlined /> Logout
                </Menu.Item>
              </Menu.SubMenu>
            </Row>
          </Menu>
        </Row>
      </Header>
    </>
  );
};

export default JKNavbar;
