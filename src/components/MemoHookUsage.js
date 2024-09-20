import React, {useState, useMemo} from 'react';
import useCustomMemo from './useCustomMemo';

const MemoHookUsage = () => {
    const [count, setCount] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log('squared count.....');
        return count * count;
    };

    const memoizedSquaredValue = useCustomMemo(squaredValue, [count]);

  return (
    <div>
        <h1>useMemo Hook Usage</h1>
        <h3>count: {count}</h3>
        <h3>squared count: {memoizedSquaredValue}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h3>counter2: {counter2}</h3>
        <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  )
}

export default MemoHookUsage;