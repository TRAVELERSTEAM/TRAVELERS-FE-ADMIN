import axios, { AxiosError } from 'axios';
import React, { useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css';

const { VITE_APP_ADMIN_APIKEY, VITE_APP_IMAGE_URL } = import.meta.env;

const accessToken = VITE_APP_ADMIN_APIKEY;
const baseUrl = VITE_APP_IMAGE_URL;

const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

interface DataProps {
  content?: string;
  placeHolder?: string;
}
const TextEditor = (prop: DataProps, ref: any) => {
  const { content, placeHolder } = prop;

  const imageHandler = () => {
    // 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement('input');
    const formData = new FormData();
    let url = '';

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append('files', file[0]);

        try {
          const { data } = await axios.post(`${baseUrl}/image`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${accessToken}`,
            },
          });

          url = data[0];

          // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
          // 해당 DOM의 데이터가 필요하기에 props로 받은 ref를 사용한다.
          const range = ref.current[1].getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = ref.current[1].getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<span><img src=${url} alt="이미지" /></span>`,
            );
          }

          return { ...data, success: true };
        } catch (error) {
          const err = error as AxiosError;
          return { ...err.response, success: false };
        }
      }
    };
  };

  // 텍스트를 입력할 때마다 imageHandler 때문에 focus가 계속 풀리게 되어 useMemo 사용.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }, { background: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['emoji'],
          ['link', 'image'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      'emoji-toolbar': true,
      'emoji-textarea': false,
      'emoji-shortname': true,
    }),
    [],
  );
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
    'emoji',
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

  Quill.register(
    {
      'formats/emoji': EmojiBlot,
      'modules/emoji-shortname': ShortNameEmoji,
      'modules/emoji-toolbar': ToolbarEmoji,
      'modules/emoji-textarea': TextAreaEmoji,
    },
    true,
  );

  return (
    <div>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            ref.current[1] = element;
          }
        }}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder={placeHolder}
        defaultValue={content}
      ></ReactQuill>
    </div>
  );
};

// 함수 컴포넌트에는 인스턴스가 없어 ref 어트리뷰트를 사용할 수 없다.
// 때문에 forwardRef를 사용
const forwardedTextEditor = React.forwardRef(TextEditor);
export default forwardedTextEditor;
