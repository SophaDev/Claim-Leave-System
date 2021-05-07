import React from 'react';
import {
  HomeIcon,
  PageIcon,
  ReportIcon,
  RequestLeaveIcon,
} from '../components/Icons';

const routes = [
  {
    path: '/app/dashboard', // the url
    icon: <HomeIcon />,
    name: 'Dashboard',
  },
  {
    icon: <PageIcon />,
    name: 'Setting',
    routes: [
      {
        path: '/app/company',
        name: 'Company',
      },
      {
        path: '/app/team',
        name: 'Team',
      },
      {
        path: '/app/employee',
        name: 'Employee',
      },
      {
        path: '/app/management',
        name: 'Team Management',
      },
      {
        path: '/app/leave-type',
        name: 'Leave Type',
      },
      {
        path: '/app/approval',
        name: 'Approval Level',
      },
    ],
  },
  {
    name: 'Request Leave',
    path: '/leave',
    icon: <RequestLeaveIcon />,
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: <ReportIcon />,
  },
];

export default routes;
