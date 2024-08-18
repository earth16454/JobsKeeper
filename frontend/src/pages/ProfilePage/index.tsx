import React from 'react';
import JKPage from '../../component/global/JKPage';
import axios from 'axios';
import { Button, Col, Image, Row, Spin, Typography } from 'antd';
import JKModal from '../../component/global/JKModal';

const { Title } = Typography;

const ProfilePage: React.FC = () => {

  return (
    <>
      <JKPage withContent>
        <Title level={4}>Profile</Title>
      </JKPage>
    </>
  );
};

export default ProfilePage;
