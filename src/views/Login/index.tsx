import './index.scss'

import { useState } from 'react';

// import {useHistory} from 'react-router-dom'

import LoginForm from './components/LoginForm';

function Index() {
    let [account] = useState<string>('hello');
    let [password] = useState<string>();
    return (
        <div className="page login-page">
            <p>Login Page</p>
            <LoginForm account={account} password={password} />
            <p>账号是：{account}</p>
            <p>密码是：{password}</p>
        </div>
    );
}

export default Index;
