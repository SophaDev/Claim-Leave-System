import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Form, Select } from 'antd';
import axios from 'axios';
const { Option } = Select;
const AddTeam: React.FC = () => {
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

  const addTeam = (e: any) => {
    setIsModalVisible(false);
    handleCancel();
    axios
      .post('http://114.119.182.183:8080/ClaimRest/team', { ...e })
      .then((results) => {
        console.log(results, 'resultsAddPost');
        history.push('/app/team' + results);
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
        title="Add New Team"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={addTeam}
          form={form}
          action=""
          method="post"
          className="form-horizontal"
        >
          <Form.Item
            label="Team Name"
            name="teamNameEn"
            rules={[
              {
                required: true,
                message: 'Please input your Team Name English!',
              },
            ]}
          >
            <Input
              type="text"
              name="teamNameEn"
              placeholder="Team Name English"
            />
          </Form.Item>
          <Form.Item
            label="Team Name Khmer"
            name="teamNameKh"
            rules={[
              {
                required: true,
                message: 'Please input your Team Name Khmer!',
              },
            ]}
          >
            <Input
              type="text"
              name="teamNameKh"
              id="teamNameKh"
              placeholder="Team Name Khmer"
            />
          </Form.Item>
          <label>Company</label>
          <Select
            style={{ width: 470 }}
            placeholder="----Select Company----"
            showSearch
          >
            {data.map((d: any, i: any) => (
              <Option key={i} value={d.id}>
                {d.companyNameEn}
              </Option>
            ))}
          </Select>
          <br /> <br />
          <Form.Item name={['team', 'Description']} label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default AddTeam;
