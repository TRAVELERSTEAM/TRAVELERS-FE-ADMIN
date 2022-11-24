import { getProductDetail } from '@/api/product/product';
import { Collapse } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { before } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const { detailId } = useParams();
  const { data, isLoading, isError } = useQuery(
    ['getProductDetail', detailId],
    () => getProductDetail(detailId),
    {
      refetchOnWindowFocus: false,
    },
  );

  function seeMoreBtnHandler(e) {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      e.target.classList.add('active');
    } else {
      e.target.classList.remove('active');
    }
  }

  function showWhichBtn() {
    return (
      <MoreBtn className="detail__see-more_btn" onClick={seeMoreBtnHandler}>
        {isOpen ? '상세정보 접기' : '상세정보 펼치기'}
      </MoreBtn>
    );
  }

  function detailContent(detail) {
    return (
      <>
        <section className="prod-wrap">
          <MainImg>
            <img className="prod__main-image" src={detail.mainImage} alt={detail.title} />
          </MainImg>
          <ProductInfo>
            <span className="title">{detail.title}</span>
            <span className="price">{`${Number(detail.price.adult).toLocaleString()} 원`}</span>
          </ProductInfo>
          <Summary className="summary-area">
            <ul className="summary__list">
              {detail.summary.map((_: string, index: number) => {
                return (
                  <li className="summary__item" key={index}>
                    {detail.summary[index]}
                  </li>
                );
              })}
            </ul>
          </Summary>
        </section>
        <SectionDetail className="prod-detail">
          <Collapse
            className="detail__body"
            in={isOpen}
            collapsedSize={1100}
            style={isOpen ? { paddingBottom: '30px' } : {}}
          >
            {detail.subImages.map((src: string, index: number) => {
              return (
                <p key={index}>
                  <img src={src} alt={`${detail.title} 상세이미지${index + 1}`} />
                </p>
              );
            })}
          </Collapse>
          <MoreBtnBox className="detail__see-more_box">{showWhichBtn()}</MoreBtnBox>
        </SectionDetail>
      </>
    );
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error..!</p>;
  return <Article>{detailContent(data)}</Article>;
}

export default ProductDetail;

const Article = styled('article')({
  margin: '0 auto',
  maxWidth: '1080px',
});

const MainImg = styled('div')(({ theme }) => ({
  width: '100%',
  height: '500px',
  overflow: 'hidden',
  '.prod__main-image': {
    width: '100%',
    transform: 'translate(0, -15%)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    '.prod__main-image': {
      transform: 'none',
    },
  },
}));

const ProductInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0',
  borderBottom: '1px solid #F3F3F3',
  span: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  '.title': {
    marginBottom: '15px',
  },
  '.price': {
    color: '#0080C6',
  },
  [theme.breakpoints.down('sm')]: {
    span: {
      fontSize: '22px',
    },
  },
}));

const Summary = styled('div')({
  padding: '40px 0',
  '.summary__item': {
    marginBottom: '5px',
    width: '100%',
    listStylePosition: 'inside',
    wordBreak: 'keep-all',
    // paddingInlineStart: '10px',
  },
});

const SectionDetail = styled('section')({
  img: {
    width: '100%',
  },
});

const MoreBtnBox = styled('div')(({ theme }) => ({
  height: '96px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '-96px',
    width: '100%',
    height: '96px',
    backgroundImage:
      'linear-gradient(to bottom, rgba(255,255,255,0.01), rgba(255,255,255,0.8) 66%, rgba(255,255,255,0.9) 83%, rgba(255,255,255,0.98) 98%, #fff)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    bottom: '48px',
    border: '1px solid #E9E9E9',
    zIndex: '-1',
  },
  [theme.breakpoints.down('sm')]: {
    height: '92px',
    '&::before': {
      top: '-92px',
      height: '92px',
    },
    '&::after': {
      bottom: '48px',
    },
  },
}));

const MoreBtn = styled('button')(({ theme }) => ({
  display: 'block',
  margin: '0 auto',
  padding: '8px 24px',
  width: '220px',
  fontSize: '19px',
  fontWeight: 'bold',
  backgroundColor: '#D9D9D9',
  border: 'none',
  borderRadius: '5px',
  outlineWidth: '0',
  transform: 'translate(0, 27px)',
  '&::after': {
    content: '"〈"',
    display: 'inline-block',
    marginLeft: '18px',
    transform: 'rotate(-0.25turn)',
  },
  '&.active::after': {
    transform: 'rotate(0.25turn)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 22px',
    width: '200px',
    fontSize: '16px',
    '&::after': {
      marginLeft: '15px',
    },
  },
}));
