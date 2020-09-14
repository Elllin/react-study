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

export const BorderRadius6 = css`
  border-radius: 0.6rem;
  -moz-border-radius: 0.6rem;
  -webkit-border-radius: 0.6rem;
`;

export const BorderRadius2 = css`
  border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  -webkit-border-radius: 0.2rem;
`;

export const BorderRadius50 = css`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`;

/* 스터디 개설 페이지 공통 스타일 */

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

export const Description = styled.span`
  display: inline-block;
  margin-top: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #5e5e5e;
`;
