import { useHistory } from 'react-router-dom';

function Error() {
    const history = useHistory();

    function handleClick() {
        history.push('/login');
    }

    return (
        <div className="page error-page">
            <p>Error Page</p>
            <div onClick={handleClick}>去登录</div>
        </div>
    );
}

export default Error;
