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
        font-family: "나눔스퀘어라운드OTF", "nanum-square-round-otf", sans-serif; 
        scroll-behavior: smooth;
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
