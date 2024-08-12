import React, { createContext, useContext } from 'react';
import { MenuProps } from 'antd';

interface JKConfigContextInterface {
  sidebarSelectedKeys: MenuProps['defaultSelectedKeys'];
  setSidebarSelectedKeys: (newValue: MenuProps['selectedKeys']) => void;
  sidebarOpenKeys: MenuProps['openKeys'];
  setSidebarOpenKeys: (newValue: MenuProps['openKeys']) => void;
  sidebarItems: MenuProps['items'];
  setSidebarItems: (newValue: MenuProps['items']) => void;
}

const contextInitialValue: JKConfigContextInterface = {
  sidebarSelectedKeys: undefined,
  setSidebarSelectedKeys: () => {},
  sidebarOpenKeys: undefined,
  setSidebarOpenKeys: () => {},
  sidebarItems: undefined,
  setSidebarItems: () => {},
};

const JKConfigContext = createContext<JKConfigContextInterface>(contextInitialValue);

export const useJKConfigContext = () => {
  const context = useContext(JKConfigContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default JKConfigContext;
