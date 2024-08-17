import React from 'react';
import JKConfigContext from './JKConfigContext';
import { UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

interface JKAppContainerContextProviderProps {
  children?: React.ReactNode;
}

const JKConfigContextProvider: React.FC<JKAppContainerContextProviderProps> = ({ children }) => {
  const [sidebarSelectedKeys, setSidebarSelectedKeys] = React.useState<MenuProps['selectedKeys']>([]);
  const [sidebarOpenKeys, setSidebarOpenKeys] = React.useState<MenuProps['selectedKeys']>([]);
  const [sidebarItems, setSidebarItems] = React.useState<MenuProps['items']>([
    {
      key: 'jk_job_application_management',
      icon: <UserOutlined />,
      label: 'Job Application Management',
    },
    {
      key: 'ohm',
      icon: <UserOutlined />,
      label: 'Ohm - Anothai',
    },
    {
      key: 'OperationsNumber',
      icon: <UserOutlined />,
      label: 'Operations Number',
    },
    {
      key: 'profile-page',
      icon: <UserOutlined />,
      label: 'Profile Page',
    }
  ]);

  return (
    <JKConfigContext.Provider
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
    </JKConfigContext.Provider>
  );
};

export default JKConfigContextProvider;
