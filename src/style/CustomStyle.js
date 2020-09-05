import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  height: 100%;
`;

export const Layout = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.input`
  padding: 0 1.6rem;
  width: 100%;
  height: 5rem;
  border-radius: 2px;
  border: solid 1px #939393;
  font-size: 1.6rem;
  font-family: AppleSDGothicNeo, 'Malgun Gothic', '맑은 고딕', dotum, 돋움, sans-serif;

  &::placeholder {
    letter-spacing: -0.03rem;
    color: #9f9f9f;
  }
`;
