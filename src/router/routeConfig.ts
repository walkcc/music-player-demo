import Home from '../views/Home';
import Login from '../views/Login';
import Error from '../views/Error';

interface RouterConfigModel {
    path: string,
    component?: any,
    auth?: boolean
}

export const routerConfig: RouterConfigModel[] = [
    {
        path: '/',
        component: Home,
        auth: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: Error
    }
];

export default routerConfig;
