import React, { useEffect, useState } from 'react';
import { Modal, Input, Form, Select } from 'antd';
import { EditIcon } from '../../components/Icons/EditIcon';
const { Option } = Select;
import axios from 'axios';
import TextArea from 'antd/lib/input/TextArea';

const UpdateTeam: React.FC<{ record: any; id: any }> = ({ record, id }) => {
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

  const updateTeam = (e: any) => {
    setIsModalVisible(false);
    handleCancel();
    axios
      .put('http://114.119.182.183:8080/ClaimRest/team/' + id, { ...e })
      .then((results) => {
        console.log(results, 'updatePost');
      })
      .catch((error) => setIsLoading(false));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      teamNameEn: record.teamNameEn,
      teamNameKh: record.teamNameKh,
      companyNameEn: record.companyNameEn,
      description: record.description,
    });
  };

  return (
    <div>
      <a onClick={showModal}>
        <i title="Edit Team" className="fa fa-edit text-primary">
          <EditIcon />
        </i>
      </a>
      <Modal
        title="Update Team"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={updateTeam}
          form={form}
          action=""
          method="put"
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
          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default UpdateTeam;
