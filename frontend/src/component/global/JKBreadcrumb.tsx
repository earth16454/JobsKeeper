import React from 'react';
import { Breadcrumb, Card, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';

export interface JKBreadcrumbProps {
  staticBreadcrumb?: BreadcrumbItemType[];
}

const JKBreadcrumb: React.FC<JKBreadcrumbProps> = ({ staticBreadcrumb }) => {
  const navigate = useNavigate();
  const [breadcrumbItems, setBreadcrumbItems] = React.useState<BreadcrumbItemType[]>([
    {
      title: (
        <Typography.Link onClick={() => navigate('/')}>
          <HomeOutlined style={{ marginRight: 8 }} />
          Home
        </Typography.Link>
      ),
      path: '/',
    },
    {
      title: 'List',
      path: '/',
    },
  ]);

  React.useEffect(() => {
    if (staticBreadcrumb && staticBreadcrumb.length > 0) {
      const newBreadcrumbItems: BreadcrumbItemType[] = staticBreadcrumb.map((breadcrumb, index) => {
        return {
          title: (
            <Typography.Link onClick={() => navigate(breadcrumb.path ?? '')} key={`breadcrumb_${index}`}>
              {breadcrumb.title}
            </Typography.Link>
          ),
          ...breadcrumb,
        };
      });
      setBreadcrumbItems(newBreadcrumbItems);
    }
  }, [staticBreadcrumb]);

  return (
    <Card styles={{ body: { padding: '8px 16px' } }}>
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>
    </Card>
  );
};

export default JKBreadcrumb;
