import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #F2E7C4;
        color: #000;
    }
`;

export default Global;