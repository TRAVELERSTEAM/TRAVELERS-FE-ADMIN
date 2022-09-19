import React, { useRef, useState } from 'react'
import TextEditor from 'src/components/texteditor/TextEditor'

const Index = () => {
  const [value, setValue] = useState(null)
  const [showImages, setShowImages] = useState([])
  const quillRef = useRef()

  const buttonHandler = () => {
    const desc = quillRef.current.getEditor().getText()
    console.log(desc)
  }

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files
    let imageUrlLists = [...showImages]

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i])
      imageUrlLists.push(currentImageUrl)
    }
    // 최대 업로드 이미지 10개로 제한
    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10)
    }

    setShowImages(imageUrlLists)
  }

  // 버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id))
  }

  return (
    <>
      <h3>상품 등록</h3>
      <div>
        <div>
          <div>
            <label htmlFor="input-file" onChange={handleAddImages}>
              <input className="d-none" type="file" id="input-file" multiple />
              <span className="border">사진추가</span>
            </label>
          </div>
          <div className="bg-white d-flex" style={{ height: '250px', overflow: 'auto' }}>
            {/* 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
            {showImages.map((image, id) => (
              <div
                className="d-flex flex-column justify-content-start align-items-center me-2"
                key={id}
              >
                <img src={image} alt={`${image}-${id}`} style={{ width: '200px' }} />
                <button className="mt-2 w-75" onClick={() => handleDeleteImage(id)}>
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <span>상품명</span>
          <input />
          <span>가격</span>
          <input />
          <span className="d-block">상품 요약 설명</span>
          <div className="form-floating">
            <textarea className="form-control" id="productTextarea"></textarea>
            <label htmlFor="productTextarea">상품 요약 설명</label>
          </div>
        </div>
        <div>
          <TextEditor
            ref={quillRef}
            value={value}
            setValue={setValue}
            placeHolder={'상품 상세 페이지를 작성하세요!'}
          />
          <button onClick={buttonHandler}>console</button>
        </div>
      </div>
    </>
  )
}

export default Index
