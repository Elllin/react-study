import React from 'react';

import styled from 'styled-components';

function ErrorPage() {
  return (
    <ErrorImgWrap>
      <img
        src="https://static.agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png"
        // src="https://www.boostability.com/wp-content/uploads/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg"
        alt="에러"
      ></img>
    </ErrorImgWrap>
  );
}

const ErrorImgWrap = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export default ErrorPage;
