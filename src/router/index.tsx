import { BrowserRouter,Switch } from 'react-router-dom';
import FrontendAuth from './FrontendAuth';

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <FrontendAuth />
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;
