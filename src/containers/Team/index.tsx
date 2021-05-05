import React, { useEffect, useState } from 'react';
import { Popconfirm, Table, Form, Button } from 'antd';
import axios from 'axios';
import { DeleteIcon } from '../../components/Icons/DeleteIcon';

const Team: React.FC = () => {
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

  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
    },
    {
      title: 'Team Name English',
      dataIndex: 'teamNameEn',
    },
    {
      title: 'Team Name Khmer',
      dataIndex: 'teamNameKh',
      width: '30%',
    },
    {
      title: 'Company',
      dataIndex: 'companyNameEn',
    },

    {
      title: 'Action',
      dataIndex: 'id',

      render: (id: string, record: any) => (
        <div className="flex flex-row items-center space-x-3">
          <Button type="primary">Edit</Button>
          <Popconfirm
            title="Do you want to delete this record?"
            // onConfirm={() => handleDelete(id)}
          >
            <div>
              <DeleteIcon />
            </div>
          </Popconfirm>
        </div>
      ),
    },
  ];
  console.log(data, 'data');
  return (
    <div>
      <Table
        loading={isLoading}
        columns={columns}
        bordered={true}
        dataSource={data}
      />
    </div>
  );
};

export default Team;
