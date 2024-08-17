import { Modal, ModalProps } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const JKModalStyled = styled(Modal)`
  .ant-modal-body {
    height: 100%;
    max-height: 65vh;
    overflow-y: auto;
  }
`;

const JKModal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <JKModalStyled width={600} centered {...props}>
      {children}
    </JKModalStyled>
  );
};

export default JKModal;
