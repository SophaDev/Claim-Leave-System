import React, { useEffect, useState } from 'react';
import { Popconfirm, Table } from 'antd';
import axios from 'axios';
import { DeleteIcon } from '../../components/Icons/DeleteIcon';
import AddTeam from './AddTeam';
import UpdateTeam from './UpdateTeam';

const Team: React.FC<{ record: any; id: any }> = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/team/list?offset=0&max=10';
  useEffect(() => {
    const getTeam = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
    };
    getTeam();
  }, []);

  const handleDelete = (id: any) => {
    axios
      .put('http://114.119.182.183:8080/ClaimRest/team/' + id, {
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
    },
    {
      title: 'Team Name English',
      dataIndex: 'teamNameEn',
    },
    {
      title: 'Team Name Khmer',
      dataIndex: 'teamNameKh',
    },
    {
      title: 'Company',
      dataIndex: ['company', 'companyNameEn'],
    },
    {
      title: 'Action',
      dataIndex: 'id',

      render: (id: string, record: any) => (
        <div className="flex flex-row items-center space-x-3">
          <UpdateTeam id={id} record={record} />
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
      <AddTeam />
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
