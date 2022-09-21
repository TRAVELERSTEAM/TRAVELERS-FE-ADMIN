import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

// API fetchData로 데이터 불러와야함
const dummyData = [
  {
    id: 1,
    title: '남여 직장인들만 스리랑카 6일',
    target: '2040',
    destination: 'sea',
    theme: 'vacationspot',
    startDate: [20220801],
    period: 6,
    thumbnail: 'https://cdn.imweb.me/thumbnail/20220403/05719c392024a.jpg',
    image: [
      'https://cdn.imweb.me/upload/S202107158604372051740/ae663a0d2c2d1.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/25b1b343b6a38.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/94d7a6e829bde.jpg',
    ],
    price: 890000,
  },
  {
    id: 2,
    title: '자녀동반 라오스 10일',
    target: 'children',
    destination: 'sea',
    theme: 'vacationspot',
    startDate: [20220801],
    period: 10,
    summary: ['string'],
    unpackage: ['ticket:true,false,true,true'],
    thumbnail: 'https://cdn.imweb.me/thumbnail/20220519/227d35b882e14.png',
    image: [
      'https://cdn.imweb.me/upload/S202107158604372051740/ae663a0d2c2d1.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/25b1b343b6a38.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/94d7a6e829bde.jpg',
    ],
    price: 1790000,
  },
  {
    id: 3,
    title: '불교인들만 미얀마 9일',
    target: 'anyone',
    destination: 'sea',
    theme: 'pilgrimage',
    startDate: [20220801],
    period: 9,
    summary: ['string'],
    unpackage: ['ticket:true,false,true,true'],
    thumbnail: 'https://cdn.imweb.me/thumbnail/20220519/227d35b882e14.png',
    image: [
      'https://cdn.imweb.me/upload/S202107158604372051740/ae663a0d2c2d1.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/25b1b343b6a38.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/94d7a6e829bde.jpg',
    ],
    price: 1590000,
  },
  {
    id: 4,
    title: '5060들만 방콕&파타야 多色 골프',
    target: '5070',
    destination: 'sea',
    summary: ['string'],
    unpackage: ['ticket:true,false,true,true'],
    theme: 'golf',
    startDate: [20220801],
    period: 5,
    price: 1790000,
    thumbnail: 'https://cdn.imweb.me/thumbnail/20220519/885b3a94a85dc.png',
    image: [
      'https://cdn.imweb.me/upload/S202107158604372051740/ae663a0d2c2d1.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/25b1b343b6a38.jpg',
      'https://cdn.imweb.me/upload/S202107158604372051740/94d7a6e829bde.jpg',
    ],
  },
]

// 상품테이블 !== 예약테이블 예정

function ProductList() {
  const [rows, setRows] = useState(dummyData)

  useEffect(() => {
    console.log(setRows)
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: '상품id',
    },
    {
      field: 'title',
      headerName: '상품명',
    },
    {
      field: 'target',
      headerName: '타겟층',
    },
    {
      field: 'destination',
      headerName: '목적지',
    },
    {
      field: 'theme',
      headerName: '테마',
    },
    {
      field: 'startDate',
      headerName: '출발일',
      type: 'date',
    },
    {
      field: 'period',
      headerName: '기간(일)',
      type: 'number',
    },
    {
      field: 'price',
      headerName: '가격',
      type: 'number',
    },
  ]

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default ProductList
