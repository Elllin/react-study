import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: AppleSDGothicNeo; 
        /* font-family 추가 예정 */
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
