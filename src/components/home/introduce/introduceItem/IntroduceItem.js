import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function IntroduceItem({ title, introduce, width, images }) {
  return (
    <List width={width}>
      <ImageWrap imgWidth={images.width}>
        <img src={images.image} alt={images.alt} />
      </ImageWrap>
      <Title>{title}</Title>
      <Introduce width={width}>{introduce}</Introduce>
    </List>
  );
}

const List = styled.li`
  width: ${({ width }) => width};
  &:nth-child(2),
  &:nth-child(4) {
    justify-self: end;
  }
  margin-bottom: 12.8rem;
`;

const ImageWrap = styled.div`
  width: ${({ imgWidth }) => imgWidth};
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  margin: 2.4rem 0 1.7rem;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 1.8rem;
`;

const Introduce = styled.div`
  word-break: keep-all;
  font-family: ${({ theme }) => theme.subFont};
  font-size: 1.6rem;
  line-height: 1.56;
  letter-spacing: -0.03rem;
  color: #666;
`;

IntroduceItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Introduce: PropTypes.string.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  width: PropTypes.string,
};

IntroduceItem.defaultProps = {
  width: '25.3rem',
};

export default IntroduceItem;
