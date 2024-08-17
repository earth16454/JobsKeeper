import React from 'react';
import JKPage from '../../component/global/JKPage';
import axios from 'axios';
import { Button, Col, Image, Row, Spin, Typography } from 'antd';
import JKModal from '../../component/global/JKModal';

const { Title } = Typography;

const ProfilePage: React.FC = () => {
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);

  return (
    <>
      <JKPage withContent>
        <Row align={'middle'}>
          <Col span={24}>
            <Title level={4}>Profile</Title>
          </Col>
        </Row>
      </JKPage>
    </>
  );
};

export default ProfilePage;
