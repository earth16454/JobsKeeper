import React from 'react';
import HeaderTitle from '../../component/HeaderTitle';
import { Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import JAMModal from './JAMModal';
import JKPage from '../../component/global/JKPage';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { HomeOutlined } from '@ant-design/icons';
import { useJobApplicationManagementContext } from './context/JobApplicationManagerContext';
import { JAMTableData } from './constant/JAMInterface';

const JobApplicationManagement: React.FC = () => {
  const { tableData } = useJobApplicationManagementContext();
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const columns: ColumnsType<JAMTableData> = [
    {
      title: 'No.',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: 'Position',
      key: 'Position',
      dataIndex: 'Position',
    },
    {
      title: 'Company name',
      key: 'CompanyName',
      dataIndex: 'CompanyName',
    },
    {
      title: 'Application date',
      key: 'ApplicationDate',
      dataIndex: 'ApplicationDate',
    },
    {
      title: 'Location',
      key: 'Location',
      dataIndex: 'Location',
    },
    {
      title: 'Status',
      key: 'Status',
      dataIndex: 'Status',
    },
    {
      title: 'Notes',
      key: 'Notes',
      dataIndex: 'Notes',
    },
  ];

  const staticBreadcrumb: BreadcrumbItemType[] = [
    {
      title: (
        <>
          <HomeOutlined style={{ marginRight: 8 }} />
          Home
        </>
      ),
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
        <Table dataSource={tableData} bordered columns={columns} scroll={{ x: 1200 }} size="small"></Table>
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

export default JobApplicationManagement;
