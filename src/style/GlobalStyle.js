import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html, body,button {
        width: 100%;
        height: 100%;
        font-size:10px;
        font-family: 'AppleSDGothicNeo','Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; 

        /* scroll-behavior: smooth; */
    }
    button{
        margin: 0;
        padding: 0;
        width: auto;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyle;
