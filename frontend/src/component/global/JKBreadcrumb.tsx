import { Breadcrumb, Card, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface JKBreadcrumbProps {
    staticBreadcrumb?: StaticBreadcrumb[];
}

export interface StaticBreadcrumb {
    title: React.ReactNode;
    path: string;
}

const JKBreadcrumb: React.FC<JKBreadcrumbProps> = ({ staticBreadcrumb }) => {
    const navigate = useNavigate();
    return (
        <Card bodyStyle={{ padding: '8px 16px' }}>
            <Breadcrumb>
                {staticBreadcrumb && staticBreadcrumb.length > 0 ? (
                    staticBreadcrumb.map((breadcrumb, index) => (
                        <Breadcrumb.Item>
                            <Typography.Link
                                onClick={() => navigate(breadcrumb.path)}
                                key={`breadcrumb_${index}`}
                            >
                                {breadcrumb.title}
                            </Typography.Link>
                        </Breadcrumb.Item>
                    ))
                ) : (
                    <>
                        <Breadcrumb.Item>
                            <Typography.Link>
                                <HomeOutlined style={{ marginRight: 8 }} />
                                Home
                            </Typography.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </>
                )}
            </Breadcrumb>
        </Card>
    );
};

export default JKBreadcrumb;
