import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

function FlotingTemplate({ children, small }) {
  const [isFixed, setIsFixed] = useState(false);
  const TOP_OFFSET = 130;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const scrollHandler = () => {
      const scrolledTopLength = window.pageYOffset;

      if (scrolledTopLength >= TOP_OFFSET) setIsFixed(true);
      else setIsFixed(false);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Wrap isFixed={isFixed} small={small}>
      {children}
    </Wrap>
  );
}

const Wrap = styled.aside`
  position: absolute;
  top: 10.3rem;
  right: 50%;
  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: 0;
    `};
  margin-right: -585px;
  padding: 2.5rem;
  width: 37rem;
  height: ${({ small }) => (small ? '20.1rem' : '27rem')};
  background-color: #fff;
`;

export default FlotingTemplate;
