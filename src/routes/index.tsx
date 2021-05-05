import { lazy } from 'react';
const Dashboard = lazy(() => import('../containers/Dashboard'));
const Company = lazy(() => import('../containers/Company'));
const Team = lazy(() => import('../containers/Team'));
const Employee = lazy(() => import('../containers/Employee'));
const ApprovalLevel = lazy(() => import('../containers/ApprovalLevel'));

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/team',
    component: Team,
  },
  {
    path: '/employee',
    component: Employee,
  },
  {
    path: '/approval-level',
    component: ApprovalLevel,
  },
];

export default routes;
