import React, { createContext, useContext } from 'react';
import { ContextJKAppContainerSidebarProps } from './interface/JKAppContainerInterface';
import { MenuProps } from 'antd';

interface contextInitialValueJKAppContainerContext {
  sidebarSelectedKeys: MenuProps['defaultSelectedKeys'];
  setSidebarSelectedKeys: (newValue: MenuProps['selectedKeys']) => void;
  sidebarOpenKeys: MenuProps['openKeys'];
  setSidebarOpenKeys: (newValue: MenuProps['openKeys']) => void;
  sidebarItems: MenuProps['items'];
  setSidebarItems: (newValue: MenuProps['items']) => void;
}

const contextInitialValue: contextInitialValueJKAppContainerContext = {
  sidebarSelectedKeys: undefined,
  setSidebarSelectedKeys: () => {},
  sidebarOpenKeys: undefined,
  setSidebarOpenKeys: () => {},
  sidebarItems: undefined,
  setSidebarItems: () => {},
};

const JKAppContainerContext = createContext<contextInitialValueJKAppContainerContext>(contextInitialValue);

// export const useJKAppContainerContext = () => useContext(JKAppContainerContext);

export const useJKAppContainerContext = () => {
  const context = useContext(JKAppContainerContext);
  if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default JKAppContainerContext;
