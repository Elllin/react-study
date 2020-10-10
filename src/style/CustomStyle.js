import styled, { css } from 'styled-components';

export const defaultLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const borderRadius = (radius) => {
  return css`
    border-radius: ${radius};
    -moz-border-radius: ${radius};
    -webkit-border-radius: ${radius};
  `;
};

/* 스터디 개설 페이지 공통 스타일 */

export const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  height: 100%;
`;

export const InputBox = styled.input`
  padding: 0 1.6rem;
  width: 100%;
  height: 5rem;

  ${borderRadius(`0.2rem`)};
  border: ${({ borderNone }) => (borderNone ? 'none' : 'solid 1px #939393')};
  &:focus {
    outline-color: ${({ theme }) => theme.mainColor};
  }

  font-size: 1.6rem;
  font-family: AppleSDGothicNeo, 'Malgun Gothic', '맑은 고딕', dotum, 돋움, sans-serif;

  &::placeholder {
    letter-spacing: -0.03rem;
    color: #9f9f9f;
  }
`;

export const HelpMessage = styled.span`
  display: inline-block;
  margin-top: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ validation, theme }) => (validation ? theme.requiredColor : '#5e5e5e')};
  
  
`;
