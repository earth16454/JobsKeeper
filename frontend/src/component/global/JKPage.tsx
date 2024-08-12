import React from 'react';
import JKBreadcrumb, { StaticBreadcrumb } from './JKBreadcrumb';
import { ContentContainer } from '../../assests/styled/Container.styled';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useJKConfigContext } from '../../context/global/JKConfigContext';

export interface JKPageProps {
  staticBreadcrumb?: StaticBreadcrumb[];
  withContent?: boolean;
  children?: React.ReactNode;
}

const JKPage: React.FC<JKPageProps> = ({ staticBreadcrumb, withContent = false, children }) => {
  const { setSidebarSelectedKeys } = useJKConfigContext();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname) {
      const newSidebarSelectedKeys = location.pathname.split('/')[1];
      setSidebarSelectedKeys([newSidebarSelectedKeys]);
    }
  }, [location.pathname, setSidebarSelectedKeys]);

  return (
    <DFlexStyled>
      <JKBreadcrumb staticBreadcrumb={staticBreadcrumb} />
      <ContentContainer withContent={withContent}>{children}</ContentContainer>
    </DFlexStyled>
  );
};

export default JKPage;

const DFlexStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
