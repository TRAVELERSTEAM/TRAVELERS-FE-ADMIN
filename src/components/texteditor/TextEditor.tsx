import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = (prop, ref) => {
  const { value, setValue, placeHolder } = prop;
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'], // toggled buttons, block
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ color: [] }, { background: [] }], // dropdown with defaults
      [{ list: 'ordered' }, { list: 'bullet' }], // lists
      ['link', 'image'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'font',
    'background',
    'color',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'script',
    'align',
    'direction',
    'link',
    'image',
    'formula',
  ];
  const textHandler = (e) => {
    setValue(e);
    // console.log(value)
    // console.log('e', e)
  };

  return (
    <div>
      <ReactQuill
        ref={ref}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={textHandler}
        placeholder={placeHolder}
      ></ReactQuill>
    </div>
  );
};

// 함수 컴포넌트에는 인스턴스가 없어 ref 어트리뷰트를 사용할 수 없다.
// 때문에 forwardRef를 사용
const forwardedTextEditor = React.forwardRef(TextEditor);
export default forwardedTextEditor;
