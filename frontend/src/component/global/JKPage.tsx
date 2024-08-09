import React from 'react';
import JKBreadcrumb, { StaticBreadcrumb } from './JKBreadcrumb';
import { ContentContainer } from '../../assests/styled/Container.styled';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useJKAppContainerContext } from './jk-app-container/JKAppContainerContext';

export interface JKPageProps {
  staticBreadcrumb?: StaticBreadcrumb[];
  withContent?: boolean;
  children?: React.ReactNode;
}

const JKPage: React.FC<JKPageProps> = ({ staticBreadcrumb, withContent = false, children }) => {
  const { setSidebarSelectedKeys } = useJKAppContainerContext();
  const location = useLocation();
  console.log('location:', location);
  // console.log("sidebar:", sidebar);

  React.useEffect(() => {
      // setSidebar({
      //   ...sidebar,
      //   defaultSelectedKeys: [location.pathname.split("/")[1]]
      // })
      setSidebarSelectedKeys([location.pathname.split("/")[1]])
  }, []);

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
