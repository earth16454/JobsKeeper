import { RouteObject } from 'react-router-dom';
import Subnav1 from '../../pages/subnav1';
import Subnav2 from '../../pages/subnav2';
import JobApplicationManager from '../../pages/jobApplicationManager';
import Ohm from '../../pages/ohm';

export const JKRoutes: RouteObject[] = [
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
    element: <Ohm />,
  },
];
