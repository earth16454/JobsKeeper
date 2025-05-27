import { DatePicker, DatePickerProps, Form, Input, ModalProps, Row } from 'antd';
import React from 'react';
import JKModal from '../../component/global/JKModal';
import { JAMFormValues } from './constant/JAMInterface';
import { useJobApplicationManagementContext } from './context/JobApplicationManagerContext';

const { TextArea } = Input;
interface JKModalProps extends ModalProps {
  onOk: (e: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  onClose?: ((e: React.SyntheticEvent) => any) | undefined;
  children?: React.ReactNode;
}

const JAMModal: React.FC<JKModalProps> = ({ children, onOk, onCancel, onClose, ...props }) => {
  const [form] = Form.useForm<JAMFormValues>();
  const { setFormValues } = useJobApplicationManagementContext();

  const handleOnOK = (e: React.MouseEvent<HTMLButtonElement> | undefined) => {
    form
      .validateFields()
      .then((values) => {
        console.log('Values:', values);
        setFormValues(values);
        form.resetFields();
        onOk(e);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleOnCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onCancel) {
      form.resetFields();
      onCancel(e);
    }
  };

  const handleOnClose = (e: React.SyntheticEvent) => {
    if (onClose) {
      form.resetFields();
      onClose(e);
    }
  };

  const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
    console.log("DATE:", date.unix());
    
    console.log(date, dateString);
  };

  return (
    <JKModal title="Add Job Application" centered onOk={handleOnOK} onCancel={handleOnCancel} onClose={handleOnClose} {...props}>
      {children ? (
        children
      ) : (
        <Row justify={'center'}>
          <Form form={form} labelCol={{ span: 24 }}>
            <Form.Item name={'Position'} label={'Position'} rules={[{ required: true, message: 'Please Enter Position' }]}>
              <Input placeholder="Position"></Input>
            </Form.Item>
            <Form.Item name={'CompanyName'} label={'Company name'} rules={[{ required: true, message: 'Please Enter Company name' }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'ApplicationDate'} label={'Application date'} rules={[{ required: true, message: 'Please Enter Application date' }]}>
              <DatePicker onChange={onChangeDatePicker} showTime format={'YYYY-MM-DD HH:mm:ss'} style={{width: '100%'}} />
            </Form.Item>
            <Form.Item name={'Location'} label={'Location'}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'Status'} label={'Status'}>
              <Input></Input>
            </Form.Item>
            <Form.Item name={'Notes'} label={'Notes'}>
              <TextArea rows={3} />
            </Form.Item>
          </Form>
        </Row>
      )}
    </JKModal>
  );
};

export default JAMModal;
