import React, { useState } from 'react'
//react-date-range
import { DateRange } from 'react-date-range'
import { ko } from 'react-date-range/dist/locale'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(date) => setState([date.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      locale={ko}
    ></DateRange>
  )
}

export default Calendar
