import React, { useEffect, useState } from 'react';
import '.././css/darkLightTheme.css';

const DarkLightTheme = () => {
    const [toggle, setToggle] = useState(false);
    const theme = toggle ? 'dark' : 'light';

    const handleTheme = () => {
        setToggle((prev)=> !prev);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', toggle ? 'Dark Mode' : 'Light Mode');
    },[theme]);

  return (
    <div>
        <h1>DarkLightTheme</h1>
        <button onClick={handleTheme} style={{border: '0.5px solid black'}}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default DarkLightTheme