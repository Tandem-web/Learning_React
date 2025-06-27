import { FaMinus, FaPlus } from 'react-icons/fa6';
import './TestUseReduce.css'
import { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action){
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'setCount':
            return {count: action.payload};
        default:
            return state
    }
}

function TestUseReduce() {
    const [state, dispath] = useReducer(reducer, initialState)

    return (
        <div className='use-reduce-container'>
            <div className='use-reduce-button' onClick={() => dispath({type: 'decrement'})}><FaMinus/></div>
            <input type="number" value={state.count} onChange={(e) => dispath({type: 'setCount', payload: +e.target.value})}name="use-reducu-input" id="use-reducu-input" className='use-reduce-input'/>
            <div className='use-reduce-button' onClick={() => dispath({type: 'increment'})}><FaPlus/></div>
        </div>
    );
}

export default TestUseReduce;