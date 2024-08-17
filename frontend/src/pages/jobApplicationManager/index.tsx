import React from 'react';
import HeaderTitle from '../../component/HeaderTitle';
import { Modal, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import mockData from './mockData.json';
import { JobApplication } from '../../interface/JobApplication';
import JAMModal from './JAMModal';
import JKPage from '../../component/global/JKPage';
import { StaticBreadcrumb } from '../../component/global/JKBreadcrumb';

const JobApplicationManager: React.FC = () => {
  const [dataSource, setDataSource] = React.useState<JobApplication[]>([]);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (Array.isArray(mockData) && mockData.length > 0) {
      setDataSource(mockData);
    }
  }, [mockData]);

  const columns: ColumnsType<JobApplication> = [
    {
      title: 'No.',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: 'Position',
      key: 'position',
      dataIndex: 'position',
    },
    {
      title: 'Company name',
      key: 'company_name',
      dataIndex: 'company_name',
    },
    {
      title: 'Application date',
      key: 'application_date',
      dataIndex: 'application_date',
    },
    {
      title: 'Location',
      key: 'location',
      dataIndex: 'location',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Notes',
      key: 'notes',
      dataIndex: 'notes',
    },
  ];

  const staticBreadcrumb: StaticBreadcrumb[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Job Application Management',
      path: '/',
    },
  ];

  return (
    <JKPage withContent staticBreadcrumb={staticBreadcrumb}>
      <Row style={{ flexDirection: 'column', gap: 16 }}>
        <HeaderTitle
          title="Job Application Management"
          addButtonAction={() => {
            setOpenModal(true);
          }}
        />
        <Table dataSource={dataSource} bordered columns={columns} scroll={{ x: 1200 }} size="small"></Table>
      </Row>
      <JAMModal
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
        }}
        onOk={() => {
          setOpenModal(false);
        }}
        onClose={() => {
          setOpenModal(false);
        }}
        centered
      ></JAMModal>
    </JKPage>
  );
};

export default JobApplicationManager;
