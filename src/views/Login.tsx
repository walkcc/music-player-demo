import { useState } from 'react';

import {useHistory} from 'react-router-dom'

function Login() {
    const history = useHistory();

    let [account, setAccount] = useState<string>();
    let [password, setPassword] = useState<string>();

    function onAccountChange({target}: { target: HTMLInputElement }): void {
       setAccount(target.value)
    }

    function onPasswordChange({target}: { target: HTMLInputElement }): void {
        setPassword(target.value)
    }

    function onSubmit():void {
        if(!account || !password) {
            return
        }

        localStorage.setItem('r_token',`${encodeURIComponent(account)}_${encodeURIComponent(password)}`);

        history.replace('/')
    }

    return (
        <div className="page login-page">
            <p>Login Page</p>
            <form action="">
                <input type="text" placeholder="输入账号" onChange={onAccountChange} />
                <input type="text" placeholder="输入密码" onChange={onPasswordChange} />
                <div onClick={onSubmit}>提交</div>
            </form>
            <p>账号是：{account}</p>
            <p>密码是：{password}</p>
        </div>
    );
}

export default Login;
