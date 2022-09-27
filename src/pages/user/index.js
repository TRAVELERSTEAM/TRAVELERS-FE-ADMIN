import { cilPencil, cilPeople, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Button } from '@mui/material'
import React from 'react'

function User() {
  const tableExample = [
    {
      avatar: { status: 'success' },
      user: {
        name: '홍길동',
        new: true,
        registered: 'Jan 1, 2021',
      },
      email: 'gildong@gmail.com',
      age: '15',
      gender: '남',
      phoneNumber: '010-0000-0000',
      since: '2022-01-01',
    },
    {
      avatar: { status: 'danger' },
      user: {
        name: '짱구',
        new: false,
        registered: 'Jan 1, 2021',
      },
      email: 'zzanggu@gmail.com',
      age: '5',
      gender: '남',
      phoneNumber: '010-0000-0000',
      since: '2022-01-01',
    },
    {
      avatar: { status: 'warning' },
      user: { name: '유리', new: true, registered: 'Jan 1, 2021' },
      email: 'uri@gmail.com',
      age: '5',
      gender: '여',
      phoneNumber: '010-0000-0000',
      since: '2022-01-01',
    },
    {
      avatar: { status: 'secondary' },
      user: { name: '철수', new: true, registered: 'Jan 1, 2021' },
      email: 'chulsu@gmail.com',
      age: '5',
      gender: '남',
      phoneNumber: '010-0000-0000',
      since: '2022-01-01',
    },
    {
      avatar: { status: 'success' },
      user: {
        name: '맹구',
        new: true,
        registered: 'Jan 1, 2021',
      },
      email: 'menggu@gmail.com',
      age: '5',
      gender: '남',
      phoneNumber: '010-0000-0000',
      since: '2022-01-01',
    },
    {
      avatar: { status: 'danger' },
      user: {
        name: '훈이',
        new: true,
        registered: 'Jan 1, 2021',
      },
      email: 'hunE@gmail.com',
      age: '5',
      gender: '남',
      phoneNumber: '010-0000-0000',
      since: '2022-01-01',
    },
  ]

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol>
            <CCard className="mb-4">
              <CCardBody>
                <h1 className="page-title">회원 정보</h1>
                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">
                        <CIcon icon={cilPeople} />
                      </CTableHeaderCell>
                      <CTableHeaderCell>회원 이름</CTableHeaderCell>
                      <CTableHeaderCell>Email</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">나이</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">성별</CTableHeaderCell>
                      <CTableHeaderCell>전화 번호</CTableHeaderCell>
                      <CTableHeaderCell>가입일</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Edit</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Delete</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableExample.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                          <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.user.name}</div>
                          <div className="small text-medium-emphasis">
                            <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                            {item.user.registered}
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <span>{item.email}</span>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <span>{item.age}</span>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <span>{item.gender}</span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <span>{item.phoneNumber}</span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <span>{item.since}</span>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <Button>
                            <CIcon icon={cilPencil} className="black" />
                          </Button>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <Button>
                            <CIcon icon={cilTrash} className="black" />
                          </Button>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default User
