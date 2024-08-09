import { Form, Input, Modal, ModalProps, Row } from 'antd';
import React from 'react';

interface JKModalProps extends ModalProps {
    children?: React.ReactNode;
}

const { TextArea } = Input;

const JKModal: React.FC<JKModalProps> = ({ children, ...props }) => {
    return (
        <Modal title="Add Job Application" width={600} {...props}>
            {children ? (
                children
            ) : (
                <Row justify={'center'}>
                    <Form labelCol={{ span: 24 }}>
                        <Form.Item name={'position'} label={'Position'}>
                            <Input></Input>
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
        </Modal>
    );
};

export default JKModal;
