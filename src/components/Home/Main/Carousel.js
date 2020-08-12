import React from 'react';
import Slider from 'react-slick';

import styled, { css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel() {
  const carouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <SliderWrap>
      <Slider {...carouselSettings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  div {
    background: blue;
    height: 100%;
  }
  h3 {
    color: white;
    font-size: 300px;
  }
`;

const ArrowButton = css`
  position: absolute;
  height: 30px;
  width: 30px;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

const PrevArrow = styled(FaChevronLeft)`
  ${ArrowButton}
  left: 0;
  z-index: 1;
`;

const NextArrow = styled(FaChevronRight)`
  ${ArrowButton}
  right:0;
`;

export default Carousel;
