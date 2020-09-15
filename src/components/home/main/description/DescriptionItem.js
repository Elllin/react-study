import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function DescriptionItem({ title, discription, width, images }) {
  return (
    <List width={width}>
      <ImageWrap imgWidth={images.width}>
        <img src={images.image} alt={images.alt} />
      </ImageWrap>
      <Title>{title}</Title>
      <Discription width={width}>{discription}</Discription>
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

const Discription = styled.div`
  word-break: keep-all;
  font-family: ${({ theme }) => theme.subFont};
  font-size: 1.6rem;
  line-height: 1.56;
  letter-spacing: -0.03rem;
  color: #666;
`;

DescriptionItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discription: PropTypes.string.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  width: PropTypes.string,
};

DescriptionItem.defaultProps = {
  width: '25.3rem',
};

export default DescriptionItem;
