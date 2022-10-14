import React, { useRef } from 'react';
import AddNotifyForm from '@/components/AddNotifyForm';
import { useMutation, useQueryClient } from 'react-query';
import { addReference, PostRequestProps } from '@/api/reference/Reference';

export interface InputRef {
  value: string;
}

function AddReference() {
  const inputRef = useRef<InputRef[]>([]);
  const reqData = { title: '', content: '' };
  // const [reqData, setReqData] = useState({ title: '', content: '' });
  const queryClient = useQueryClient();

  const { mutate } = useMutation('addReference', (data: PostRequestProps) => addReference(data));

  const addHandler = () => {
    reqData.title = inputRef.current[0].value;
    reqData.content = inputRef.current[1].value;
    mutate(reqData, {
      onSuccess: () => {
        queryClient.invalidateQueries('reference');
      },
    });
    console.log(reqData);
  };

  return (
    <>
      <div>
        <AddNotifyForm ref={inputRef} place={'자료실'} title={''} content={''} />
      </div>
      <button onClick={addHandler}>등록</button>
    </>
  );
}

export default AddReference;
