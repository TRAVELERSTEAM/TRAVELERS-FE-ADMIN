import {
  DetailReturnProps,
  getRefDetail,
  PutReqProps,
  updateReference,
} from '@/api/reference/Reference';
import React, { useEffect, useState, useRef } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { InputRef } from './AddReference';
import AddNotifyForm from '@/components/AddNotifyForm';

function ReferenceDetail() {
  const inputRef = useRef<InputRef[]>([]);
  const reqData = { id: '', updateData: { title: '', content: '' } };
  const [isEditMode, setIsEditMode] = useState(false);
  const { detailId } = useParams();
  const queryClient = useQueryClient();
  const [refDetail, setRefDetail] = useState<DetailReturnProps>();
  const { data, isLoading } = useQuery(
    ['refDetail', detailId],
    () => getRefDetail(detailId as string),
    {
      refetchOnWindowFocus: false,
    },
  );
  const { mutate } = useMutation('updateRef', (data: PutReqProps) => updateReference(data));
  const addHandler = () => {
    reqData.id = detailId as string;
    reqData.updateData.title = inputRef.current[0].value;
    reqData.updateData.content = inputRef.current[1].value;
    mutate(reqData, {
      onSuccess: () => {
        queryClient.invalidateQueries('refDetail');
      },
    });
    console.log(reqData);
  };
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
            <AddNotifyForm
              ref={inputRef}
              place={'게시글 수정'}
              title={refDetail?.title}
              content={refDetail?.content}
            />
          </div>
          <button onClick={editModeHandler}>취소</button>
          <button onClick={() => (addHandler(), editModeHandler())}>등록</button>
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
