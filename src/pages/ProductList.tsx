import { getAllProduct, ProductProps } from '@/api/product/product';
import ProductCardLayout from '@/layouts/ProductCardLayout';
import { styled } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';

function ProductList() {
  const { data, isLoading, isError } = useQuery('getAllProduct', getAllProduct, {
    refetchOnWindowFocus: false,
  });
  console.log(data);
  const matches = useMediaQuery('(min-width: 540px');
  console.log(matches);

  function productCard(products: ProductProps[] | undefined) {
    return products?.map((product) => {
      return (
        <Card key={product.id} title={product.title}>
          <ProductCardLayout
            mainImage={product.mainImage}
            title={product.title}
            price={product.price.adult}
            id={product.id}
          />
        </Card>
      );
    });
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!!!</p>;
  return <Container>{productCard(data)}</Container>;
}

export default ProductList;

const Container = styled('div')(({ theme }) => ({
  margin: '0 auto',
  maxWidth: '1300px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px 40px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const Card = styled('div')({
  border: '1px solid #e2e2e2',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, .2)',
});
