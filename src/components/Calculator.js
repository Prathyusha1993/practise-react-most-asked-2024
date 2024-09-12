import React, {useState} from 'react'

const Calculator = () => {
    const [result, setResult] = useState(false);
    const [value, setValue] = useState('');

    const handleClear = () => {
        setValue('');
        setResult('');
    };

    const handleDelete = () => {
        setValue(prev => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        try{
            setResult(eval(value));
        }catch(error){
            setResult('Error');
        }
    }

  return (
    <div>
        <h1>Calculator</h1>
        <input type="text" value={value} disabled />
        { <p>{result}</p>}
        <div>
            <button onClick={handleClear}>AC</button>
            <button onClick={handleDelete}>DE</button>
            <button onClick={() => setValue(prev => prev+'.')}>.</button>
            <button onClick={() => setValue(prev => prev+'/')}>/</button>
        </div>
        <div>
            <button onClick={() => setValue(prev => prev+'7')}>7</button>
            <button onClick={() => setValue(prev => prev+'8')}>8</button>
            <button onClick={() => setValue(prev => prev+'9')}>9</button>
            <button onClick={() => setValue(prev => prev+'*')}>*</button>
        </div>
        <div>
            <button onClick={() => setValue(prev => prev+'6')}>6</button>
            <button onClick={() => setValue(prev => prev+'5')}>5</button>
            <button onClick={() => setValue(prev => prev+'4')}>4</button>
            <button onClick={() => setValue(prev => prev+'-')}>-</button>
        </div>
        <div>
            <button onClick={() => setValue(prev => prev+'3')}>3</button>
            <button onClick={() => setValue(prev => prev+'2')}>2</button>
            <button onClick={() => setValue(prev => prev+'1')}>1</button>
            <button onClick={() => setValue(prev => prev+'+')}>+</button>
        </div>
        <div>
            <button onClick={() => setValue(prev => prev+'0')}>0</button>
            <button onClick={handleCalculate}>=</button>
        </div>
    </div>
  )
}

export default Calculator;