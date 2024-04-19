import React from 'react';
import { Table, Tag } from 'antd';

type UserLogType = {
  id: number;
  action: string;
  timestamp: string;
  details: string;
};

const userLogs: UserLogType[] = [
  {
    id: 1,
    action: 'Booked a ride',
    timestamp: '2022-01-15 10:30:00',
    details: 'Details for booking a ride',
  },
  {
    id: 2,
    action: 'Cancelled a ride',
    timestamp: '2022-01-15 11:15:00',
    details: 'Details for cancelling a ride',
  },
  // Add more data as needed
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text: string) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
  },
];

const UserLogsTable: React.FC = () => {
  return (
    <Table
      dataSource={userLogs}
      columns={columns}
      size="middle"
        pagination={false}
        className="shadow-2xl ml-4 font-poppins  mt-5 bg-white
         pl-4 text-black  overflow-hidden font-semibold"
    
    />
  );
};

export default UserLogsTable;
