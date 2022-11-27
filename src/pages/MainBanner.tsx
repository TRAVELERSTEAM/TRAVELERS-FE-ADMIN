import { getAllBanner, ResBannerProps } from '@/api/banner/banner';
import { styled } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

function MainBanner() {
  const [bannerList, setBannerList] = useState<ResBannerProps[]>();
  const { data } = useQuery('getAllBanner', getAllBanner, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setBannerList(data);
  }, [data]);

  return (
    <TableStyle>
      <thead>
        <tr className="header-title">
          <th>번호</th>
          <th>배너이미지</th>
          <th>상품 ID</th>
          <th>제목</th>
          <th>해쉬태그</th>
        </tr>
      </thead>
      <tbody>
        {bannerList?.map((banner, index) => {
          return (
            <tr key={banner.productId}>
              <td>{index + 1}</td>
              <td>
                <BannerImg src={banner.image} alt={banner.title} />
              </td>
              <td className="product-id">
                <span>{banner.productId}</span>
              </td>
              <td>
                <span>{banner.title}</span>
              </td>
              <td>
                <span>{banner.hashtag}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableStyle>
  );
}

export default MainBanner;

const TableStyle = styled('table')(({ theme }) => ({
  fontSize: '18px',
  wordBreak: 'keep-all',
  borderCollapse: 'collapse',
  th: {
    padding: '5px 0',
  },
  'tr, td': {
    padding: '0 20px',
    borderBottom: '1px solid #ececec',
  },
  '.header-title': {
    borderBottom: '1px solid #333',
  },
  '.product-id': {
    textAlign: 'center',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    'tr, td': {
      padding: '0 5px',
    },
  },
}));

const BannerImg = styled('img')({
  padding: '4px 14px',
  width: '100%',
  maxWidth: '300px',
});
