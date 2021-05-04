import { lazy } from 'react';
const Dashboard = lazy(() => import('../containers/Dashboard'));
const Company = lazy(() => import('../containers/Company'));
const ApprovalLevel = lazy(() => import('../containers/ApprovalLevel'));

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/approval-level',
    component: ApprovalLevel,
  },
];

export default routes;
