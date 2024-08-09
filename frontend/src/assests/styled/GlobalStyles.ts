import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --white: #fff;
        --primary: #5C75F5;
        /* --info: #4d6feb; */
        --success: #50bc8c;
        --warning: #f4c048;
        --error: #df4c3f;
        --text-color: #030303;
        --bg-color: #f6f6f6;

        --rgb-white: rgb(255, 255, 255);
        --rgb-primary: rgb(92, 117, 245);
        /* --rgb-info: #4d6feb; */
        --rgb-success: rgb(80, 188, 140);
        --rgb-warning: rgb(244, 192, 72);
        --rgb-error: rgb(223, 76, 63);
        --rgb-text-color: 3, 3, 3;
        --rgb-bg-color: rgb(246, 246, 246);

        /* --header-box-shadow: 0px 0px 8px rgba(168, 216, 243, 0.5); */
    }

    body {
        background-color: var(--bg-color);
    }

    .ant-card {
        border-width: 0;
        box-shadow: var(--card-box-shadow);
    }
`;
