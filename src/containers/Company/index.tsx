import axios from 'axios';
import { Table, Popconfirm, Button, Modal, Input, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Update } from './Update';

const Company: React.FC<{ record: any }> = ({ record: any }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/company/list?offset=0&max=10';
  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const saveCompany = (e: any) => {
    console.log(e, 'eee');
    axios
      .post('http://114.119.182.183:8080/ClaimRest/company', { ...e })
      .then((results) => {
        console.log(results, 'resultsAddPost');
        history.push('/app/company' + results);
        console.log(results, 'results');
      })
      .catch((error) => setIsLoading(false));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = (value: any) => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: 'Name English',
      dataIndex: 'companyNameEn',
    },
    {
      title: 'Name Khmer',
      dataIndex: 'companyNameKh',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id: string, record: any) => (
        <div className="flex flex-row items-center space-x-3">
          <Update record={record} id={id} />
          <Popconfirm
            title="Do you want to delete this record?"
            // onConfirm={() => handleDelete}
            // onConfirm={() => deleteProduct(data._id)}
          >
            <a>Delete</a>
          </Popconfirm>
        </div>
      ),
    },
  ];
  console.log(data, 'data');
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add New
      </Button>
      <Table
        loading={isLoading}
        columns={columns}
        bordered={true}
        dataSource={data}
      />
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

export default Company;
