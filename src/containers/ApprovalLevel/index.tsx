import { Table, Popconfirm } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DeleteIcon } from '../../components/Icons/DeleteIcon';
import { AddApproval } from './AddApproval';
import { UpdateApproval } from './UpdateApproval';

const Approval: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl =
    'http://114.119.182.183:8080/ClaimRest/approvalLevel/list?offset=0&max=10';
  useEffect(() => {
    const getApproveLevel = async () => {
      const result = await axios(apiUrl);
      setData(result.data.results);
    };
    getApproveLevel();
  }, []);

  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
    },
    {
      title: 'Level Name',
      dataIndex: 'levelName',
    },
    {
      title: 'Level number',
      dataIndex: 'levelNumber',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '40%',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id: string, data: any) => (
        <div className="flex flex-row items-center space-x-3">
          <UpdateApproval id={id} record={data} />
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

  return (
    <div>
      <AddApproval />
      <Table
        loading={isLoading}
        columns={columns}
        bordered={true}
        dataSource={data}
      />
    </div>
  );
};

export default Approval;
