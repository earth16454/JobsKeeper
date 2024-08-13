import React from "react";
import { Form, Input, Radio, Button } from "antd";
import JKPage from "../../component/global/JKPage";
import { InformationForm } from "../../interface/Information";

interface PersonalInformationFormProps {
  onFinish: (values: InformationForm) => void;
}
const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
  onFinish
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values: InformationForm) => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <JKPage withContent>
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
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Plaese input your phone!" }]}
        >
          <Input placeholder="Enter your phone" />
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
  );
};

export default PersonalInformationForm;
