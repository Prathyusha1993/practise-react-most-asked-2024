import React, { useState } from 'react';

const CalendarComp = () => {
  const [value, setValue] = useState(new Date());
  const [selectDate, setSelectDate] = useState('');

  return (
    <div>
      <input type='date' value={value} onChange={(e) => setSelectDate(e.target.value)} />
      <p>{selectDate.toString()}</p>
    </div>
  )
}

export default CalendarComp;