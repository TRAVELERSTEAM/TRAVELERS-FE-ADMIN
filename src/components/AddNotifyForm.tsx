import React from 'react';
import TextEditor from '@/components/texteditor/TextEditor';

interface Data {
  place: string;
  title?: string;
  content?: string;
}

function ReferenceInputForm(prop: Data, ref) {
  const { place, title, content } = prop;

  return (
    <div>
      <h2>{place}</h2>
      <div>
        <p>제목</p>
        <input
          type="text"
          name="title"
          ref={(element) => (ref.current[0] = element)}
          defaultValue={title}
        />
      </div>
      <div>
        <p>내용</p>
        <TextEditor ref={ref} placeHolder={'여기에 글을 작성해주세요!'} content={content} />
      </div>
    </div>
  );
}

const forwardedReferenceInputForm = React.forwardRef(ReferenceInputForm);
export default forwardedReferenceInputForm;
