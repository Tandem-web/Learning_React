import { useCallback, useState } from 'react';
import ChildButton from './components/ChildButton';
import './TestUseCallback.css'

function TestUseCallback() {
    const [count, setCount] = useState(0);
    const handlerClick = () => {
        console.log('Button clicked');
    }

    const handlerClickCallback = useCallback(() => {
        console.log('Button clicked');
    }, []);

    return (
        <div className='use-callback-container'>
            <ChildButton onClick={handlerClick} text="Кнопка без UseCallback" componentNumber="1"/>
            <button onClick={() => setCount(count+1)}>+1 = {count}</button>
            <ChildButton onClick={handlerClickCallback} text="Кнопка с UseCallback" componentNumber="2"/>
        </div>
    );
}

export default TestUseCallback;