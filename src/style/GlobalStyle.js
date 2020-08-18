import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
        
        font-family: AppleSDGothicNeo; 
        /* font-family 추가 예정 */
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
