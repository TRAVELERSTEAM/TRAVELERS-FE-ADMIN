import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
const initRows = [
  {
    id: 1,
    name: 'a',
    phone: '112312323',
    people: 4,
    createDate: 123123123,
    updateDate: 123123123,
    status: '구매 신청',
  },
  {
    id: 2,
    name: 'b',
    phone: '123123123',
    people: 3,
    createDate: 123123123,
    updateDate: 123123312,
    status: '구매 확정',
  },
  {
    id: 3,
    name: 'c',
    phone: '123123123',
    people: 2,
    createDate: 123123123,
    updateDate: 123123312,
    status: '구매 취소',
  },
]

function ReservationProduct() {
  const [rows, setRows] = useState(initRows)

  useEffect(() => {
    console.log(setRows)
  }, [])

  // API fetchData로 데이터 불러와야함

  const columns = [
    {
      field: 'id',
      headerName: '예약 번호',
    },
    {
      field: 'name',
      editable: true,
      headerName: '이름',
    },
    {
      field: 'phone',
      headerName: '연락처',
    },
    {
      field: 'people',
      headerName: '희망 인원',
      editable: true,
      type: 'number',
    },
    {
      field: 'createDate',
      headerName: '구매 신청일',
      type: 'date',
    },
    {
      field: 'status',
      headerName: '신청 상태',
      type: 'singleSelect',
      valueOptions: ['구매 신청', '구매 확정', '구매 취소'],
    },
  ]

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} experimentalFeatures={{ newEditingApi: true }} />
    </div>
  )
}

export default ReservationProduct
