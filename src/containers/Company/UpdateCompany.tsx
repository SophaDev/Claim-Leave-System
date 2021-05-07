import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import axios from 'axios';
import { EditIcon } from '../../components/Icons/EditIcon';

export const UpdateCompany: React.FC<{ record: any; id: any }> = ({
  record,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const updateCompany = (e: any) => {
    setIsModalVisible(false);
    handleCancel();
    axios
      .put('http://114.119.182.183:8080/ClaimRest/company/' + id, { ...e })
      .then((results) => {
        console.log(results, 'resultsEditPost');
        console.log(results, 'results');
      })
      .catch((error) => setIsLoading(false));
  };

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      companyNameEn: record.companyNameEn,
      companyNameKh: record.companyNameKh,
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log(record, 'record');
  return (
    <div>
      <a onClick={showModal}>
        <i title="Edit Company" className="fa fa-edit text-primary">
          <EditIcon />
        </i>
      </a>
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
          <Form.Item
            label="Name English"
            name="companyNameEn"
            rules={[
              {
                required: true,
                message: 'Please input your Company Name English!',
              },
            ]}
          >
            <Input type="text" name="companyNameEn" id="companyNameEn" />
          </Form.Item>
          <Form.Item
            label="Name Khmer"
            name="companyNameKh"
            rules={[
              {
                required: true,
                message: 'Please input your Company Name Khmer!',
              },
            ]}
          >
            <Input type="text" name="companyNameKh" id="companyNameKh" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
