import axios from 'axios';
import { Popconfirm, Table, Form, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UpdateCompany } from './UpdateCompany';
import { DeleteIcon } from '../../components/Icons/DeleteIcon';
import { AddCompany } from './AddCompany';

const Company: React.FC<{ record: any; id: any }> = () => {
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

  const handleDelete = (id: any) => {
    axios
      .put('http://114.119.182.183:8080/ClaimRest/company/' + id, {
        status: false,
      })
      .then((results) => {
        console.log(results, 'DeleteResults');
      })
      .catch((error) => setIsLoading(false));
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
      width: '30%',
    },
    {
      title: 'Name Khmer',
      dataIndex: 'companyNameKh',
      width: '30%',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      width: '30%',
      render: (id: string, record: any) => (
        <div className="flex flex-row items-center space-x-3">
          <UpdateCompany id={id} record={record} />
          <Popconfirm
            title="Do you want to delete this record?"
            onConfirm={() => handleDelete(id)}
          >
            <div>
              <DeleteIcon />
            </div>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AddCompany />
      <Table
        loading={isLoading}
        columns={columns}
        bordered={true}
        dataSource={data}
      />
    </div>
  );
};
export default Company;
