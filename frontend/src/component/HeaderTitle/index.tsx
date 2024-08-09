import { Button, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface HeaderTitleProps {
    title?: string;
    addButtonAction?: () => void;
    extra?: React.ReactNode;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, addButtonAction, extra }) => {
    return (
        <>
            <Row justify={'space-between'} align={'middle'}>
                <Col>
                    <Title level={5} style={{ margin: 0 }}>
                        {title}
                    </Title>
                </Col>
                <Col>
                    <Space>
                        {extra}
                        {addButtonAction && (
                            <Button type="primary" icon={<PlusOutlined />} onClick={addButtonAction}>
                                Add
                            </Button>
                        )}
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export default HeaderTitle;
