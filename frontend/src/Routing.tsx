import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { JKRoutes } from './component/route/JKRoutes';
import JKAppContainer from './component/global/jk-app-container/JKAppContainer';

const AllRoutes = [...JKRoutes];

const Routing: React.FC = () => {
  const router = createBrowserRouter(
    AllRoutes.map((item, index) => {
      return {
        path: item.path,
        element: <JKAppContainer key={index}>{item.element}</JKAppContainer>,
      };
    })
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routing;
