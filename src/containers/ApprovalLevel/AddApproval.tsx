import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';

export const AddApproval: React.FC = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const addApproval = (e: any) => {
    handleCancel();
    axios
      .post('http://114.119.182.183:8080/ClaimRest/approvalLevel', { ...e })
      .then((results) => {
        console.log(results);
        history.push('/app/approval' + results);
      })
      .catch((error) => setIsLoading(false));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add New
      </Button>

      <Modal
        title="Add New Approval Level"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={addApproval}
          form={form}
          action=""
          method="post"
          className="form-horizontal"
        >
          <Form.Item
            label="Level Name"
            name="levelName"
            rules={[
              {
                required: true,
                message: 'Please input your level name!',
              },
            ]}
          >
            <Input
              type="text"
              name="levelName"
              placeholder="Enter Level Name"
            />
          </Form.Item>
          <Form.Item
            label="Level Number"
            name="levelNumber"
            rules={[
              {
                required: true,
                message: 'Please input Leave number day!',
              },
            ]}
          >
            <Input
              type="text"
              name="levelNumber"
              placeholder="Enter Level Number"
            />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
