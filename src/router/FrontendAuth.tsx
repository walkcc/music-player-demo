import { useLocation, Redirect,Route } from 'react-router-dom';
import { routerConfig } from './routeConfig';

function FrontendAuth() {
    const {pathname} = useLocation();
    const isLogin = localStorage.getItem('r_token');

    const targetRouterConfig = routerConfig.find(i => i.path === pathname);

    if(!targetRouterConfig) {
        return <Redirect to="/404"/>
    }

    if(isLogin) {
        if(pathname === '/login') {
            return <Redirect to="/"/>
        } else {
            return <Route path={pathname} component={targetRouterConfig.component} />
        }
    }

    if(targetRouterConfig.auth) {
        return <Redirect to="/login"/>
    } else {
        return <Route path={pathname} component={targetRouterConfig.component} />
    }
}

export default FrontendAuth;
