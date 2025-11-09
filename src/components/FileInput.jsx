import { useState, useRef } from 'react';
import styled from 'styled-components';

function FileInput({ onChange, accept = 'image/*', multiple = false }) {
  const [preview, setPreview] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const files = e.target.files;

    if (!files.length || preview !== null) {
      setErrorMsg(true);
      return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
    onChange?.(files);
  };

  const handleDelete = () => {
    setPreview(null);
    onChange?.(null);
    setErrorMsg(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <FileInputWrap>
        <Label>
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleChange}
          />
          <AddInput>
            <Placeholder>이미지 등록</Placeholder>
          </AddInput>
        </Label>
        <Preview>
          {preview && (
            <>
              <PreviewImg src={preview} alt="미리보기" />
              <button onClick={handleDelete}>삭제</button>
            </>
          )}
        </Preview>
      </FileInputWrap>
      {errorMsg && <Error>* 이미지 등록은 최대 1개까지 가능합니다.</Error>}
    </>
  );
}

export default FileInput;

const FileInputWrap = styled.div`
  display: flex;
  width: 100%;
`;

const Preview = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  margin-left: 24px;
  overflow: hidden;

  > button {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 22px;
    height: 24px;
    text-indent: -9999px;
    background: url('../../public/ico_fileinput_del.svg') no-repeat;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }

  /* 테블릿 */
  @media (max-width: 900px) {
    width: 168px;
    height: 168px;
  }

  /* 모바일 */
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
    aspect-ratio: 1 / 1;
    margin-left: 10px;
  }
`;

const Label = styled.label`
  display: block;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const AddInput = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background: url('../../public/ico_fileinput_add.svg') no-repeat top 98px
    center #f3f4f6;
  display: flex;
  justify-content: center;
  overflow: hidden;

  /* 테블릿 */
  @media (max-width: 900px) {
    width: 168px;
    height: 168px;
    background-position-y: 41px;
  }

  /* 모바일 */
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    background-position-y: 71px;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.span`
  display: block;
  color: #9ca3af;
  margin-top: 158px;

  /* 테블릿 */
  @media (max-width: 900px) {
    margin-top: 101px;
  }

  /* 테블릿 */
  @media (max-width: 600px) {
    margin-top: 121px;
  }
`;

const Error = styled.div`
  margin-top: 16px;
  color: #f74747;
`;
