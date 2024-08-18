import React from 'react';
import JKBreadcrumb from './JKBreadcrumb';
import { ContentContainer } from '../../assests/styled/Container.styled';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useJKConfigContext } from '../../context/global/JKConfigContext';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';

export interface JKPageProps {
  staticBreadcrumb?: BreadcrumbItemType[];
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
