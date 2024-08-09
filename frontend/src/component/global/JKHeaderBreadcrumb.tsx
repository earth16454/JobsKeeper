import { HomeOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Row } from 'antd';
import React from 'react';

const JKHeaderBreadcrumb: React.FC = () => {
    return (
        <>
            <Card>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <HomeOutlined style={{ marginRight: 8 }} />
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                {/* <Row>
                    <LeftCircleOutlined />
                </Row> */}
            </Card>
        </>
    );
};

export default JKHeaderBreadcrumb;
