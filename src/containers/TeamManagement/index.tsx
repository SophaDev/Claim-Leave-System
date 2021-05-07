import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AddTeamManagement } from './AddTeamManagement';

const TeamManagement: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/team-management/list?offset=0&max=10';
  useEffect(() => {
    const getTeamManagement = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
    };
    getTeamManagement();
  }, []);

  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
    },
    {
      title: 'Team',
      dataIndex: ['team', 'teamNameEn'],
    },
    {
      title: 'Company',
      dataIndex: ['team', 'company', 'companyNameEn'],
    },
    {
      title: 'Supervisor',
      dataIndex: ['supervisor', 'nameEn'],
    },
    {
      title: 'Head',
      dataIndex: ['head', 'nameEn'],
    },
    {
      title: 'Action',
      dataIndex: 'id',
    },
  ];
  console.log(data, 'data');
  return (
    <div>
      <AddTeamManagement />
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        loading={isLoading}
      />
    </div>
  );
};

export default TeamManagement;
