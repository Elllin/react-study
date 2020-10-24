import React from 'react';

import styled from 'styled-components';
import { defaultLayout } from 'style/CustomStyle';

function UserInfo() {
  return (
    <Wrap>
      <User>
        <Mark>
          <ImgWrap>
            <img src="http://placehold.it/100x100" alt="방장 마크" />
          </ImgWrap>
        </Mark>
        <UserWrap>
          <Name>최유정</Name>
          <Email>asdkfjsl@aldnlfns</Email>
        </UserWrap>
      </User>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 0.1rem 2rem;
  border-bottom: solid 1px #e8e8e8;
`;

const User = styled.div`
  display: flex;
`;

const ImgWrap = styled.div`
  width: 25px;
  height: 17px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Mark = styled.div`
  margin-right: 1.7rem;
  width: 42px;
  height: 42px;
  border: solid 1px #ffd000;
  border-radius: 50%;
  ${defaultLayout};
`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.span`
  width: 42px;
  height: 25px;
  font-size: 16px;
  line-height: 1.56;
  font-weight: 500;
`;

const Email = styled.span`
  width: 140px;
  height: 25px;
  font-size: 16px;
  line-height: 1.56;
  color: #4e4e4e;
`;
export default UserInfo;
