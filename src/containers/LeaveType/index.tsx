import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Popconfirm } from 'antd';
import { DeleteIcon } from '../../components/Icons/DeleteIcon';
import { AddLeaveType } from './AddLeaveType';
import { UpdateLeaveType } from './UpdateLeaveType';

const LeaveType: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/permissionType/list?offset=0&max=10';
  useEffect(() => {
    const getAllLeaveType = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
    };
    getAllLeaveType();
  }, []);

  const handleDelete = (id: any) => {
    axios
      .put('http://114.119.182.183:8080/ClaimRest/permissionType/' + id, {
        status: false,
      })
      .then((results) => {
        console.log(results);
      })
      .catch((error) => setIsLoading(false));
  };
  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
    },
    {
      title: 'Permission Type',
      dataIndex: 'name',
    },
    {
      title: 'Number of day',
      dataIndex: 'numberLeaveDay',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '40%',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id: string, record: any) => (
        <div className="flex flex-row items-center space-x-3">
          <UpdateLeaveType id={id} record={record} />
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
      <AddLeaveType />
      <Table
        loading={isLoading}
        columns={columns}
        bordered={true}
        dataSource={data}
      />
    </div>
  );
};
export default LeaveType;
