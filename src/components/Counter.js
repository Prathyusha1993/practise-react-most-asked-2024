import React, {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
    };
    const handleDec = () => {
        setCount(count - 1);
    };
  return (
    <div>
        <button onClick={handleInc}>+</button>
        {count}
        <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Counter;