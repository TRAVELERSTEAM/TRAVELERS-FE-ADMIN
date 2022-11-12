import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  mainImage: string;
  price: number;
  title: string;
}

// interface ProductPrice {
//   adult?: number;
//   infant?: number;
//   kid?: number;
// }

function ProductCardLayout(prop: ProductCardProps) {
  const { mainImage, title, price, id } = prop;

  return (
    <Link to={`/dashboard/product/detail/${id}`}>
      <ImgBox>
        <img src={mainImage} alt={`${title} 이미지`} />
      </ImgBox>
      <Desc>
        <Test className="title">{title}</Test>
        <span className="price">{`${Number(price).toLocaleString()}원`}</span>
      </Desc>
    </Link>
  );
}

export default ProductCardLayout;

const ImgBox = styled('div')({
  width: '100%',
});

const Desc = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '15px 8px',
  color: '#333',
  span: {
    flexGrow: '1',
    verticalAlign: 'middle',
  },
  '.title': {
    marginBottom: '10px',
    fontSize: '1.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  '.price': {
    fontSize: '0.9rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
}));

const Test = styled('span')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
