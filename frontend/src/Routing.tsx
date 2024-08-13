import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JobApplicationManager from './pages/jobApplicationManager';
import Subnav1 from './pages/subnav1';
import Subnav2 from './pages/subnav2';
import PersonalInformation from './pages/ohm';

const Routing: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <JobApplicationManager />,
    },
    {
      path: 'subnav1',
      element: <Subnav1 />,
    },
    {
      path: 'subnav2',
      element: <Subnav2 />,
    },
    {
      path: 'ohm',
      element: <PersonalInformation />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routing;
