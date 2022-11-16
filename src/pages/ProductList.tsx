import { getAllProduct, ProductProps } from '@/api/product/product';
import ProductCardLayout from '@/layouts/ProductCardLayout';
import { styled } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

function ProductList() {
  const [filtered, setFilterd] = useState<string>('all');
  const [products, setProducts] = useState<ProductProps[]>();
  const { data, isLoading, isError } = useQuery('getAllProduct', getAllProduct, {
    refetchOnWindowFocus: false,
  });

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

  useEffect(() => {
    if (filtered === 'all') return setProducts(data);
    setProducts(data?.filter((el: ProductProps) => el.target === filtered));
  }, [data, filtered]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!!!</p>;
  return (
    <Container>
      <FilterArea>
        <select
          className="product-filter"
          name="product-filter"
          id="filter"
          defaultValue={'all'}
          onChange={(e) => setFilterd(e.target.value)}
        >
          <option value="all">== 카테고리 ==</option>
          <option value="5070끼리">5070끼리</option>
          <option value="2040끼리">2040끼리</option>
          <option value="남자끼리">남자끼리</option>
          <option value="여자끼리">여자끼리</option>
          <option value="누구든지">누구든지</option>
          <option value="자녀동반">자녀동반</option>
        </select>
        <span className="filterd-count">{`상품 ${products?.length}개`}</span>
      </FilterArea>
      <Contant>{productCard(products)}</Contant>
    </Container>
  );
}

export default ProductList;

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const FilterArea = styled('div')({
  padding: '20px 0',
  '.product-filter': {
    marginRight: '8px',
    padding: '3px',
    width: '8rem',
    borderColor: '#637381',
    borderRadius: '3px',
    color: '#637381',
  },
  '.filterd-count': {
    fontSize: '0.9rem',
  },
});

const Contant = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '24px 16px',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const Card = styled('div')({
  border: '1px solid #e2e2e2',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, .2)',
  img: {
    transition: 'all .3s ease',
  },
  '&:hover': {
    img: {
      transform: 'scale(1.05)',
    },
  },
});
