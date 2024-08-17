import React, { useState } from "react";
import JKPage from "../../component/global/JKPage";
import { InformationTable } from "../../interface/Information";
import { Button, Popconfirm, Table } from "antd";

interface PersonalInformationTableProps {
  dataSource: InformationTable[];
}

const PersonalInformationTable: React.FC<PersonalInformationTableProps> = ({
  dataSource,
}) => {
  // const [dataSource, setDataSourse] = useState<InformationTable[]>([]);

  const columns = [
    {
      title: "FullName",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Delete",
      key: "delete",
      render: (_: any, record: InformationTable) => (
        <Popconfirm
          title="Are you sure to delete ?"
          // onConfirm={() => handleDelete(record.key)}
        >
          <Button danger type="text">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  // const handleDelete = (key: string) => {
  //   setDataSourse(dataSource.filter((item) => item.key !== key));
  // };

  return (
    <>
      <JKPage withContent>
        <Table columns={columns} dataSource={dataSource} />
      </JKPage>
    </>
  );
};

export default PersonalInformationTable;
