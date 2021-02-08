import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { appState } from '../store/types';

function Home(): JSX.Element {
    const history = useHistory();
    const user = useSelector((state: appState) => state.user);
    const dispatch = useDispatch();

    let [count, setCount] = useState<number>();

    function onClick(): void {
        history.push('/error');
    }

    function addCount(): void {
        const newCount = count !== undefined ? count + 1 : 0;

        setCount(newCount);
    }

    return (
        <div className="page page-index">
            <p>Home Page user {JSON.stringify(user)}</p>
            <p onClick={addCount}>count is {count}</p>
            <p onClick={onClick}>go error</p>
            <p onClick={() => dispatch({type: 'SET_USER', user: {name: 'hello'}})}>Login</p>
        </div>
    );
}

export default Home;
