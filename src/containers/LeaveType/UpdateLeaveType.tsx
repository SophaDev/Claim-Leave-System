import React, { useState } from 'react';
import { Modal, Input, Form, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { EditIcon } from '../../components/Icons/EditIcon';
import axios from 'axios';

export const UpdateLeaveType: React.FC<{ record: any; id: any }> = ({
  record,
  id,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const UpdateLeaveType = (e: any) => {
    handleCancel();
    axios
      .put('http://114.119.182.183:8080/ClaimRest/permissionType/' + id, {
        ...e,
      })
      .then((results) => {
        console.log(results);
      })
      .catch((error) => setIsLoading(false));
  };

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      name: record.name,
      numberLeaveDay: record.numberLeaveDay,
      description: record.description,
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  return (
    <div>
      <a onClick={showModal}>
        <i title="Edit Leave Type" className="fa fa-edit text-primary">
          <EditIcon />
        </i>
      </a>
      <Modal
        title="Update Leave Type"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={UpdateLeaveType}
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
