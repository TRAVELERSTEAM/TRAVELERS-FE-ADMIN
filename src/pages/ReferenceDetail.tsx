import { DetailReturnProps, getRefDetail } from '@/api/reference/Reference';
import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { InputRef } from './AddReference';
import AddNotifyForm from '@/components/AddNotifyForm';

function ReferenceDetail() {
  const inputRef = useRef<InputRef[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const { detailId } = useParams();
  const [refDetail, setRefDetail] = useState<DetailReturnProps>();
  const { data, isLoading } = useQuery(
    ['refDetail', detailId],
    () => getRefDetail(detailId as string),
    {
      refetchOnWindowFocus: false,
    },
  );

  const editModeHandler = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    setRefDetail(data);
  }, [data]);
  console.log(refDetail);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {isEditMode ? (
        <>
          <div>
            <AddNotifyForm ref={inputRef} place={'자료실'} title={''} content={''} />
          </div>
          <button onClick={editModeHandler}>취소</button>
          <button>등록</button>
        </>
      ) : (
        <>
          <div>
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
          </div>
          <button onClick={editModeHandler}>수정</button>
        </>
      )}
    </>
  );
}

export default ReferenceDetail;
