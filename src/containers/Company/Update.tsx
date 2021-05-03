import React, { useState } from 'react';
import { Table, Popconfirm, Button, Modal, Input, Form } from 'antd';
import axios from 'axios';

export const Update: React.FC<{ record: any; id: string }> = ({
  record: any,
  id: string,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const updateCompany = (e: any) => {
    axios
      .put('http://114.119.182.183:8080/ClaimRest/company', { ...e })
      .then((results) => {
        console.log(results, 'resultsUpdate');
        history.push('/app/company' + results);
      })
      .catch((error) => setIsLoading(false));
  };

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      companyNameEn: '',
      companyNameKh: '',
    });
  };
  const handleOk = (value: any) => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Update
      </Button>
      <Modal
        title="Update Company"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          onFinish={updateCompany}
          form={form}
          action=""
          method="put"
          className="form-horizontal"
        >
          <Form.Item label="Company Name English" name="companyNameEn">
            <Input />
          </Form.Item>
          <Form.Item label="Company Name Khmer" name="companyNameKh">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
