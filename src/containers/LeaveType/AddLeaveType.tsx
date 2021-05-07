import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import axios from 'axios';
import TextArea from 'antd/lib/input/TextArea';

export const AddLeaveType: React.FC = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const addLeaveType = (e: any) => {
    handleCancel();
    axios
      .post('http://114.119.182.183:8080/ClaimRest/permissionType', { ...e })
      .then((results) => {
        console.log(results, 'results');
        history.push('/app/leave-type' + results);
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
  console.log(addLeaveType, 'addLeaveType');
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add New
      </Button>
      <Modal
        title="Add New Leave Type"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={addLeaveType}
          form={form}
          action=""
          method="post"
          className="form-horizontal"
        >
          <Form.Item
            label="Leave type"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your Leave Type!',
              },
            ]}
          >
            <Input type="text" name="name" placeholder="Role Name" />
          </Form.Item>
          <Form.Item
            label="Maximum leave number"
            name="numberLeaveDay"
            rules={[
              {
                required: true,
                message: 'Please input Leave number day!',
              },
            ]}
          >
            <Input
              type="text"
              name="numberLeaveDay"
              placeholder="Maximum Leave Number"
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
