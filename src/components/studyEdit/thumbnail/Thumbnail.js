import React, { useState } from 'react';
import BoxTemplate from '../../createStudy/boxTemplate/BoxTemplate';
import FormTemplate from '../../createStudy/formTemplate/FormTemplate';

import styled from 'styled-components';
import { defaultLayout, HelpMessage } from 'style/CustomStyle';

function Thumbnail() {
  const [files, setFiles] = useState([]);

  const onChangeFile = (e) => {
    const currentFiles = e.target.files;
    const filesArr = Array.prototype.slice.call(currentFiles);
    setFiles([...files, ...filesArr]);
  };

  const removeFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter((item) => item !== file));
  };
  return (
    <Wrap>
      <BoxTemplate title="썸네일 사진" as="div">
        <Container>
          <ImgWrap>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </ImgWrap>
          <HelpWrap>
            <label>
              <input type="file" onChange={onChangeFile} />
              이미지 가져오기
            </label>
            <HelpMessage>
              * 300KB이하, JPG, PNG 형식으로
              <br /> 등록해주세요.
            </HelpMessage>
            <HelpMessage>
              * 그룹을 대표하는 썸네일 이미지입니다. 주제를 잘 보여주는 이미지가 좋아요.
            </HelpMessage>
            {files.map((file) => (
              <UploadFileArea onClick={() => removeFile(file)}>{file.name}</UploadFileArea>
            ))}
          </HelpWrap>
        </Container>
        <ImgListWrap>
          <li>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </li>
          <li>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </li>
          <li>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </li>
          <li>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </li>
          <li>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </li>
          <li>
            <img src="http://placehold.it/100x100" alt="스터디 상세페이지 썸네일" />
          </li>
        </ImgListWrap>
        <HelpMessage>
          기본 이미지 중 선택 가능 / 최초 그룹 개설 후에는 기본 이미지 중 랜덤으로 한 장이 썸네일이
          됩니다.
        </HelpMessage>
      </BoxTemplate>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 3rem;
`;

const ImgWrap = styled.div`
  margin-bottom: 1.5rem;
  width: 335px;
  height: 210px;
  border-radius: 2px;
  background-color: #d8d8d8;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  ${defaultLayout};
`;

const HelpWrap = styled.div`
  margin-left: 2.5rem;
  width: 21.1rem;
  height: 22.5rem;

  label {
    width: 211px;
    height: 48px;
    border-radius: 2px;
    border: solid 1px #939393;
    background-color: #e2e2e2;

    display: block;
    padding: 15px 56px 14px;
    font-size: 1.5em;
    transition: all 0.4s;
    letter-spacing: -0.3px;
    cursor: pointer;
  }
  input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 225px;
    opacity: 0;
    padding: 14px 0;
    cursor: pointer;
  }
`;

const UploadFileArea = styled.div`
  color: red;
`;

const ImgListWrap = styled.ul`
  ${defaultLayout};
  li {
    width: 8.8rem;
    height: 7.3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  li + li {
    margin-left: 0.9rem;
  }
`;

export default Thumbnail;
