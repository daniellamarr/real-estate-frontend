import Home from '../pages/Home';
import Customer from '../pages/Customer'
import UpdateUser from '../pages/UpdateUser'
import UpdatePlot from '../pages/UpdatePlot'
import CreateUser from '../pages/CreateUser'
import CreatePlot from '../pages/CreatePlot'

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'customer',
    component: Customer,
    exact: true,
    path: '/customer/:customerId',
  },
  {
    name: 'edit',
    component: UpdateUser,
    exact: true,
    path: '/edit/:customerId',
  },
  {
    name: 're-allocate',
    component: UpdatePlot,
    exact: true,
    path: '/re-allocate',
  },
  {
    name: 'create-user',
    component: CreateUser,
    exact: true,
    path: '/create-user',
  },
  {
    name: 'allocate-plot',
    component: CreatePlot,
    exact: true,
    path: '/allocate-plot',
  },
];
