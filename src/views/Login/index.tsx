import './index.scss'

// import { useState } from 'react';

// import {useHistory} from 'react-router-dom'

import LoginForm from './components/LoginForm';

function Index() {
    return (
        <div className="page login-page">
            <p>Login Page</p>
            <LoginForm />
        </div>
    );
}

export default Index;
