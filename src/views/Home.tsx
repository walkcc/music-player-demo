import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home(): JSX.Element {
    const history = useHistory();

    let [count, setCount] = useState<number>();

    useEffect(() => {
        let pageIndex: HTMLElement | null = document.querySelector('.page-index');

        if (pageIndex) {
            pageIndex.style.color = 'red';
        }

        const timer = setInterval(() => {
            console.log(timer,'setInterval');
        }, 1000);


        return () => {
            console.log('Interval Will Be Unmount');
            clearInterval(timer);
        };
    }, []);

    function onClick(): void {
        history.push('/error');
    }

    function addCount(): void {
        const newCount = count !== undefined ? count + 1 : 0;

        console.log(newCount);
        setCount(newCount);
    }

    return (
        <div className="page page-index">
            <p>Home Page</p>
            <p onClick={addCount}>count is {count}</p>
            <p onClick={onClick}>go error</p>
        </div>
    );
}

export default Home;
