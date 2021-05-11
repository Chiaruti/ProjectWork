import React, { useState } from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import './App.css';


export default function Daily() {
  const [startDate, setStartDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  return (
    <div >
      <p>Selected start date: {startDate ? format(startDate, 'dd MMM yyyy', { locale: it  }) : 'none'}.</p>
      
          <DateRangePickerCalendar className='calendario'
        startDate={startDate}

        focus={focus}
        onStartDateChange={setStartDate}
        onFocusChange={handleFocusChange}
        locale={it}
      />
    </div>
  )
}