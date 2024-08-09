import React from 'react';
import JKAppContainerContext from './JKAppContainerContext';
import { ContextJKAppContainerSidebarProps } from './interface/JKAppContainerInterface';
import { UserOutlined } from '@ant-design/icons';
import { menuItems } from '../jk-sidebar';
import { MenuProps } from 'antd';

interface JKAppContainerContextProviderProps {
  children?: React.ReactNode;
}

const JKAppContainerContextProvider: React.FC<JKAppContainerContextProviderProps> = ({
  children,
}) => {
  const [sidebarSelectedKeys, setSidebarSelectedKeys] = React.useState<MenuProps['selectedKeys']>();
  const [sidebarOpenKeys, setSidebarOpenKeys] = React.useState<MenuProps['selectedKeys']>();
  const [sidebarItems, setSidebarItems] = React.useState<MenuProps['items']>([
    {
      key: 'jk_job_application_management',
      icon: <UserOutlined />,
      label: 'Job Application Management',
    },
    ...(menuItems ?? []),
  ]);

  return (
    <JKAppContainerContext.Provider
      value={{
        sidebarItems,
        setSidebarItems,
        sidebarOpenKeys,
        setSidebarOpenKeys,
        sidebarSelectedKeys,
        setSidebarSelectedKeys,
      }}
    >
      {children}
    </JKAppContainerContext.Provider>
  );
};

export default JKAppContainerContextProvider;
