import React, {useState} from 'react';
import './Counter.css';

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div className='Counter'>
            <h5>Количество человек </h5>
            <button className='inc' type='button' onClick={increment}>+</button>
            <p>{count}</p>
            <button className='dec' type='button' onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;
