import React, { useMemo } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = (quillRef, htmlContent, setHtmlContent) => {
  console.log(quillRef)
  const modules = useMemo(
    () => ({
      toolbar: {
        // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        // handlers: { // 위에서 만든 이미지 핸들러 사용하도록 설정
        //     image: imageHandler,
        // },
      },
    }),
    [],
  )

  const formats = [
    'header',
    'font',
    'background',
    'color',
    'code',
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
    'code-block',
    'formula',
    'video',
  ]
  const styles = {
    height: '400px',
  }
  const textHandler = () => {
    console.log(quillRef.current)
  }

  return (
    <div>
      <ReactQuill
        // ref={quillRef}
        style={styles}
        theme="snow"
        modules={modules}
        formats={formats}
        value={htmlContent}
        onChange={setHtmlContent}
        placeholder="상품 상세 페이지를 작성하세요!"
      ></ReactQuill>
    </div>
  )
}

export default TextEditor
