import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel() {
  const carouselSettins = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    // arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <SliderWrap>
      <Slider {...carouselSettins}>
        <div>
          <h3>1{/* <FaChevronRight /> */}</h3>
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
  margin: 0 auto;
  div {
    background: blue;
    height: 100%;
  }
  h3 {
    color: white;
    font-size: 300px;
  }
`;

const PrevArrow = styled(FaChevronLeft)`
  position: absolute;
  font-size: 50px;
  left: 0;
  z-index: 1;
  height: 30px;
  width: 30px;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

const NextArrow = styled(FaChevronRight)`
  color: white;
  position: absolute;
  right: 0;
  height: 30px;
  width: 30px;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export default Carousel;
