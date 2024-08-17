import { Card } from 'antd';
import styled from 'styled-components';

export const breakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
};

export const ContainerStyled = styled.div`
    width: 100%;
    /* padding-right: calc(1.5rem * 0.5);
    padding-left: calc(0rem * 0.5); */
    margin-right: auto;
    margin-left: auto;

    @media (min-width: ${breakpoints.sm}) {
        max-width: 540px;
    }

    @media (min-width: ${breakpoints.md}) {
        max-width: 720px;
    }

    @media (min-width: ${breakpoints.lg}) {
        max-width: 960px;
    }

    @media (min-width: ${breakpoints.xl}) {
        max-width: 1140px;
    }

    @media (min-width: ${breakpoints.xxl}) {
        max-width: 1320px;
    }

    .ant-typography {
        margin: 0 !important;
    }
`;

interface ContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    withContent?: boolean;
    children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ withContent = false, children, ...props }) => {
    return <ContainerStyled {...props}>{withContent ? <Card>{children}</Card> : children}</ContainerStyled>;
};

export const ContentContainer: React.FC<ContainerProps> = ({ withContent = false, children, ...props }) => {
    return (
        <>
            <Container withContent={withContent} {...props}>
                {children}
            </Container>
        </>
    );
};
