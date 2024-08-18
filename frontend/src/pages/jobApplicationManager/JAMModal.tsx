import { Form, Input, Modal, ModalProps, Row } from 'antd';
import React from 'react';
import JKModal from '../../component/global/JKModal';

interface JKModalProps extends ModalProps {
  onOk: (e: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  children?: React.ReactNode;
}

const { TextArea } = Input;

const JAMModal: React.FC<JKModalProps> = ({ children, onOk, ...props }) => {
  const [form] = Form.useForm();
  const handleOnOK = (e: React.MouseEvent<HTMLButtonElement> | undefined) => {
    form
      .validateFields()
      .then((values) => {
        console.log('Values:', values);
        onOk(e);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  return (
    <JKModal title="Add Job Application" centered onOk={handleOnOK} {...props}>
      {children ? (
        children
      ) : (
        <Row justify={'center'}>
          <Form form={form} labelCol={{ span: 24 }}>
            <Form.Item name={'position'} label={'Position'} rules={[{ required: true, message: 'Please Enter Position' }]}>
              <Input placeholder="Position"></Input>
            </Form.Item>
            <Form.Item name={'company_name'} label={'Company name'}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'application_date'} label={'Application date'}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'location'} label={'Location'}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'status'} label={'Status'}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'notes'} label={'Notes'}>
              <TextArea rows={3} />
            </Form.Item>
          </Form>
        </Row>
      )}
    </JKModal>
  );
};

export default JAMModal;
