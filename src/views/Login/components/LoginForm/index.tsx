import { useState, useEffect } from 'react';

interface LoginFormProps {
    account?: string | undefined,
    password?: string | undefined
}

export function LoginForm(props: LoginFormProps): JSX.Element {
    let [account, setAccount] = useState<string | undefined>(props.account);
    let [password, setPassword] = useState<string | undefined>(props.password);

    const verifydRule = {
        account: {
            required: true,
            max: 10,
            min: 5,
            test: []
        },
        password: []
    };

    useEffect(() => {

    }, [account, password]);

    function onChange({target}: { target: HTMLInputElement }): void {
        const {name, value} = target;

        if (name === 'account') {
            setAccount(value);
        }

        if (name === 'password') {
            setPassword(value);
        }
    }

    return (
        <div className="login-form">
            <div className="login-form-item">
                <div className="login-form-label" />
                <input type="text" name="account" onChange={onChange} defaultValue={account} />
            </div>
            <div className="login-form-item">
                <div className="login-form-label" />
                <input type="text" name="password" onChange={onChange} defaultValue={password} />
            </div>
        </div>
    );
}

export default LoginForm;
