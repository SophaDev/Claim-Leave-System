import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Form, Result } from 'antd';
import axios from 'axios';

export const AddCompany: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/company/list?offset=0&max=10';
  useEffect(() => {
    const getCompany = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
    };
    getCompany();
  }, []);

  const saveCompany = (e: any) => {
    setIsModalVisible(false);
    handleCancel();
    axios
      .post('http://114.119.182.183:8080/ClaimRest/company', { ...e })
      .then((results) => {
        console.log(results, 'resultsAddPost');
        history.push('/app/company' + results);
        console.log(results, 'results');
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
        title="Add New Company"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          onFinish={saveCompany}
          form={form}
          action=""
          method="post"
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
            <Input
              type="text"
              name="companyNameEn"
              id="companyNameEn"
              placeholder="Company Name English"
            />
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
            <Input
              type="text"
              name="companyNameKh"
              id="companyNameKh"
              placeholder="Company Name Khmer"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
