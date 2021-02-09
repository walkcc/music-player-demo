interface LoginFormProps {
    account?: string,
    password?: string
}

export function LoginForm(props: LoginFormProps):JSX.Element {
    console.log(props.account);
    console.log(props.password);
    return (
        <div className="login-form">
            <div className="login-form-item">
                <div className="login-form-label" />
                <input type="text" />
            </div>
            <div className="login-form-item">
                <div className="login-form-label" />
                <input type="text" />
            </div>
        </div>
    );
}

export default LoginForm;
