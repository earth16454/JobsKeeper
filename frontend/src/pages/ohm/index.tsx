import React, { useState } from "react";
import JKPage from "../../component/global/JKPage";
import { Information } from "../../interface/Information";
import { Table, Form, Input, Radio, Button, Popconfirm } from "antd";

const Ohm: React.FC = () => {
  const [data, setData] = useState<Information[]>([]);

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
      title: "Number",
      dataIndex: "number",
      key: "number",
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
      render: (_: any, record: Information) => (
        <Popconfirm
          title="Are you sure to delete ?"
          onConfirm={() => handleDelete(record.key)}
        >
          <Button danger type="text">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const [gender, setGender] = useState("Male");

  const genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    const newData: Information = {
      key: 'String',
      fullname: values.fullname,
      gender: values.gender,
      number: values.number,
      email: values.email,
      address: values.address,
    };
    setData([...data, newData]);
    form.resetFields();
  };

  const handleDelete = (key: string) => {
    setData(data.filter((item) => item.key !== key));
  };

  return (
    <>
      <JKPage withContent>
        <Table columns={columns} dataSource={data} />

        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="fullname"
            label="FullName"
            rules={[{ required: true, message: "Plaese input your fullname!" }]}
          >
            <Input placeholder="Enter your fullname"></Input>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Plaese Click your gender!" }]}
          >
            <Radio.Group
              value={gender}
              options={genderOption}
              onChange={(e) => setGender(e.target.value)}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>

          <Form.Item
            name="number"
            label="Number"
            rules={[{ required: true, message: "Plaese input your number!" }]}
          >
            <Input placeholder="Enter your number" type="number"></Input>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Plaese input your email!" }]}
          >
            <Input placeholder="Enter your email" type="email"></Input>
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Plaese input your address!" }]}
          >
            <Input.TextArea placeholder="Enter your address"></Input.TextArea>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "5px" }}
            >
              Confirm
            </Button>
            <Button danger onClick={() => form.resetFields()}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </JKPage>
    </>
  );
};

export default Ohm;
