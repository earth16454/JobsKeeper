import { ConfigProviderProps } from 'antd';

const customizeTheme: ConfigProviderProps = {
    theme: {
        token: {
            colorPrimary: '#4d6feb',
            colorInfo: '#4d6feb',
            colorSuccess: '#50bc8c',
            colorWarning: '#f4c048',
            colorError: '#df4c3f',
            colorTextBase: '#030303',
            colorBgBase: '#f6f6f6',
            wireframe: false,
            colorBgContainer: '#fff',
        },
        components: {
            Button: {
                borderRadius: 16,
                primaryShadow: '0 2px 0px rgba(0, 0, 0, 0.045)',
                defaultShadow: '0 2px 0px rgba(0, 0, 0, 0.045)',
                dangerShadow: '0 2px 0px rgba(0, 0, 0, 0.045)',
            },
            Layout: {
                headerBg: 'var(--white)',
                bodyBg: 'var(--rgb-bg-color)',
                footerBg: 'var(--white)',
            },
            Card: {
                // borderRadius: 16,
                // borderRadiusLG: 16,
                // borderRadiusSM: 8
                boxShadow: '0 10px 0 rgba(0,0,0,0.5)',
                // boxShadow: 'var(--card-box-shadow)'
                boxShadowSecondary: '0 10px 0 rgba(0,0,0,0.5)',
            },
            Table: {
                borderColor: 'rgba(0,0,0,0.06)',
                // borderRadiusLG: 8,
                headerColor: 'var(--white)',
                headerBg: '#4d6feb',
                rowHoverBg: '#e6f8ff',
            },
        },
    },
};

export default customizeTheme;
