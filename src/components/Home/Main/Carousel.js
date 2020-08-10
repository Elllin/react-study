import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

function Carousel() {
  const carouselSettins = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };
  return (
    <SliderWrap>
      <Slider {...carouselSettins}>
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
  width: 950px;
  margin: 0 auto;
`;

export default Carousel;
