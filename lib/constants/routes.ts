import IndexScreen from '../../src/screens/Index';
import UserScreen from '../../src/screens/User';
import UsersScreen from '../../src/screens/Users';
import {UserType} from '../@types';

export const APP_ROUTES = [
  {name: 'index', component: IndexScreen},
  {
    name: 'users',
    component: UsersScreen,
  },
  {name: 'user', component: UserScreen},
];

export type RootAppParamList = {
  index: undefined;
  users: {users: UserType[]};
  user: {
    user: UserType;
  };
};
