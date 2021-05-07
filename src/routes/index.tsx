import { lazy } from 'react';
const Dashboard = lazy(() => import('../containers/Dashboard'));
const Company = lazy(() => import('../containers/Company'));
const Team = lazy(() => import('../containers/Team'));
const Employee = lazy(() => import('../containers/Employee'));
const LeaveType = lazy(() => import('../containers/LeaveType'));
const TeamManagement = lazy(() => import('../containers/TeamManagement'));
const Approval = lazy(() => import('../containers/ApprovalLevel'));

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
    path: '/management',
    component: TeamManagement,
  },
  {
    path: '/leave-type',
    component: LeaveType,
  },
  {
    path: '/approval',
    component: Approval,
  },
];

export default routes;
