import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Form, Select } from 'antd';
import axios from 'axios';
const { Option } = Select;
export const AddTeamManagement: React.FC = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/team/list?offset=0&max=10';
  useEffect(() => {
    const getTeam = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
    };
    getTeam();
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  function onSearch(val: any) {
    console.log('search:', val);
  }
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add New
      </Button>
      <Modal
        title="Add New Team Management"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          // onFinish={addTeam}
          form={form}
          action=""
          method="post"
          className="form-horizontal"
        >
          <label>Team</label>
          <Select
            style={{ width: 470 }}
            placeholder="----Select Team----"
            showSearch
            onSearch={onSearch}
            onChange={onChange}
          >
            {data.map((d: any, i: any) => (
              <Option key={i} value={d.id}>
                {d.teamNameEn}
              </Option>
            ))}
          </Select>
          <Form.Item
            label="Company"
            name="companyNameEn"
            rules={[
              {
                required: true,
                message: 'Please input your company Name English!',
              },
            ]}
          >
            <Input
              type="text"
              name="companyNameEn"
              placeholder="Company Name English"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
