import React, { useState } from 'react';

const SearchComponent = () => {
    const [search, setSearch] = useState('');
    const fruits = ['apple', 'banana', 'mango', 'orange', 'pear'];
  return (
    <div>
        <input type='text' placeholdere='search' value={search} onChange={(e) => setSearch(e.target.value)} />
        {fruits.filter(fruit => fruit.includes(search)).map(fruit => <p>{fruit}</p>)}
    </div>
  )
}

export default SearchComponent;