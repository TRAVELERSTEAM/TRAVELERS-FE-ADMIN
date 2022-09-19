import React from 'react'
import { CTable, CPagination, CPaginationItem } from '@coreui/react'

function ReservationProduct() {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'email',
      label: '이메일',
      _props: { scope: 'col' },
    },
    {
      key: 'phone',
      label: '연락처',
      _props: { scope: 'col' },
    },
    {
      key: 'comment',
      label: '문의사항',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: '구매 상태',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      email: 'a@a.com',
      phone: '123123123',
      comment: '없음',
      status: '신청',
    },
    {
      id: 2,
      email: 'a@a.com',
      phone: '123123123',
      comment: '없음',
      status: '확정',
    },
    {
      id: 3,
      email: 'a@a.com',
      phone: '123123123',
      comment: '없음',
      status: '거절',
    },
  ]

  return (
    <>
      <CTable columns={columns} items={items} />
      <CPagination>
        <CPaginationItem>1</CPaginationItem>
      </CPagination>
    </>
  )
}

export default ReservationProduct
