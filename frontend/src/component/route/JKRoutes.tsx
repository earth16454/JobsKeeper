import { RouteObject } from 'react-router-dom';
import Subnav1 from '../../pages/subnav1';
import Subnav2 from '../../pages/subnav2';
import JobApplicationManager from '../../pages/jobApplicationManager';
import PersonalInformation from '../../pages/ohm/index';
import OperationsNumber from '../../pages/test01/OperationsNumber';



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
    element: <PersonalInformation />,
  },
  {
    path: 'OperationsNumber',
    element: <OperationsNumber />,
  },
];
