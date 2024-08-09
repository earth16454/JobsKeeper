import { Button, Layout, Menu, MenuProps } from 'antd';
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useJKAppContainerContext } from '../jk-app-container/JKAppContainerContext';
import { ContextJKAppContainerSidebarProps } from '../jk-app-container/interface/JKAppContainerInterface';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export const menuItems: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `subnav${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const JKSidebar: React.FC = () => {
  const { sidebarSelectedKeys, sidebarOpenKeys, sidebarItems } = useJKAppContainerContext();
  // const navigate = useNavigate();
  const handleMenu: MenuProps['onClick'] = (e) => {
    console.log(e);
    // navigate("/test")
    // navigate("")
  };

  return (
    <>
      <Sider width={280}>
        <Menu
          mode="inline"
          selectedKeys={sidebarSelectedKeys}
          openKeys={sidebarOpenKeys}
          style={{ height: '100%' }}
          items={sidebarItems}
          onClick={handleMenu}
        />
      </Sider>
    </>
  );
};

export default JKSidebar;
