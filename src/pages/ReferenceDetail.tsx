import {
  deleteReference,
  DetailReturnProps,
  getRefDetail,
  PutReqProps,
  updateReference,
} from '@/api/reference/Reference';
import React, { useEffect, useState, useRef } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { InputRef } from './AddReference';
import AddNotifyForm from '@/components/AddNotifyForm';

function ReferenceDetail() {
  const inputRef = useRef<InputRef[]>([]);
  const reqData = { id: '', updateData: { title: '', content: '' } };
  const [isEditMode, setIsEditMode] = useState(false);
  const { detailId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [refDetail, setRefDetail] = useState<DetailReturnProps>();
  // 상세내용 Req
  const { data, isLoading } = useQuery(
    ['refDetail', detailId],
    () => getRefDetail(detailId as string),
    {
      refetchOnWindowFocus: false,
    },
  );

  // 글 수정 Req
  const { mutate: updateMutate } = useMutation('updateRef', (data: PutReqProps) =>
    updateReference(data),
  );

  // 글 삭제 Req
  const { mutate: deleteMutate } = useMutation(['deleteRef', detailId], (id: string) =>
    deleteReference(id),
  );

  const addHandler = () => {
    reqData.id = detailId as string;
    reqData.updateData.title = inputRef.current[0].value;
    reqData.updateData.content = inputRef.current[1].value;
    updateMutate(reqData, {
      onSuccess: () => {
        queryClient.invalidateQueries('refDetail');
      },
    });
    console.log(reqData);
  };

  const editModeHandler = () => {
    setIsEditMode(!isEditMode);
  };

  const deleteHandler = (id: string) => {
    if (!confirm('이 게시물을 삭제하시겠습니까?')) {
      return;
    } else {
      deleteMutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries('reference');
        },
      });
      navigate(-1);
    }
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
          <button onClick={() => deleteHandler(detailId as string)}>삭제</button>
        </>
      )}
    </>
  );
}

export default ReferenceDetail;
