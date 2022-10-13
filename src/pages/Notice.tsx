import React, { useRef, useState } from 'react';
import TextEditor from '@/components/texteditor/TextEditor';
import axios from 'axios';

function Notice() {
  const [value, setValue] = useState(undefined);
  const quillRef = useRef<any>();
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const accessToken = import.meta.env.VITE_APP_ADMIN_APIKEY;
  const buttonHandler = () => {
    axios.post(
      `${baseUrl}/notify/notice`,
      {
        content: value,
        title: '2022 대한민국 서비스 만족 大賞 수상',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  };

  return (
    <>
      <TextEditor
        ref={quillRef}
        textData={value}
        setTextData={setValue}
        placeHolder={'상품 상세 페이지를 작성하세요!'}
      />
      <button onClick={buttonHandler}>console</button>
    </>
  );
}

export default Notice;
