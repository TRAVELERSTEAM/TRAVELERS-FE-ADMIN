import React, { useEffect, useRef, useState } from 'react'
import TextEditor from 'src/components/texteditor/TextEditor'

const Index = () => {
  const [htmlContent, setHtmlContent] = useState('')
  const quillRef = React.createRef()

  const buttonHandler = () => {
    console.log(quillRef)
  }

  useEffect(() => {
    setHtmlContent(quillRef.current)
  }, [quillRef])

  return (
    <>
      <h3>상품 등록</h3>
      <div>
        <div>
          <img src="" alt="" />
          <input type="file" />
        </div>
        <div>
          <span>상품명</span>
          <input />
          <span>가격</span>
          <input />
          <span>상품 요약 설명</span>
          <div className="form-floating">
            <textarea className="form-control" id="productTextarea"></textarea>
            <label htmlFor="productTextarea">상품 요약 설명</label>
          </div>
          <div>
            <TextEditor
              className="pt-3"
              quillRef={quillRef}
              htmlContent={htmlContent}
              setHtmlContent={setHtmlContent}
            />
            <button className="mt-5" onClick={buttonHandler}>
              console
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
