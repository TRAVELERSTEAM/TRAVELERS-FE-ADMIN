import { DetailReturnProps, getRefDetail } from '@/api/reference/Reference';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function ReferenceDetail() {
  const { detailId } = useParams();
  const [refDetail, setRefDetail] = useState<DetailReturnProps>();
  const { data, isLoading } = useQuery(
    ['refDetail', detailId],
    () => getRefDetail(detailId as string),
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    setRefDetail(data);
  }, [data]);
  console.log(refDetail);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{refDetail?.sequence}</td>
            <td>{refDetail?.title}</td>
            <td>{refDetail?.writer}</td>
            <td>{refDetail?.createdAt}</td>
          </tr>
          <tr>
            <td colSpan={4}>
              {refDetail?.content && (
                <p dangerouslySetInnerHTML={{ __html: refDetail.content }}></p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ReferenceDetail;
