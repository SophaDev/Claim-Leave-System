import React, { useState } from 'react';
import { EditIcon } from '../../components/Icons/EditIcon';
import { Modal, Input, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';

export const UpdateApproval: React.FC<{ id: any; record: any }> = ({
  id,
  record,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const updateApproval = (e: any) => {
    handleCancel();
    axios
      .put('http://114.119.182.183:8080/ClaimRest/approvalLevel/' + id, {
        ...e,
      })
      .then((results) => {
        console.log(results, 'results');
      })
      .catch((error) => setIsLoading(false));
  };

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      levelName: record.levelName,
      levelNumber: record.levelNumber,
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
        <i title="Edit Approval Level" className="fa fa-edit text-primary">
          <EditIcon />
        </i>
      </a>
      <Modal
        title="Add New Approval Level"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={updateApproval}
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
