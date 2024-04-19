import React, { useState } from 'react';
import { Table, Button, Input, Select, DatePicker, Space } from 'antd';
import { FilterOutlined, EditOutlined, SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { FaSearch, FaFilter } from 'react-icons/fa';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

export type Transaction = {
  id: string;
  userId: string;
  dateTime: string;
  type: string;
  amount: number;
  status: string;
  details: string;
  paymentMethod: string;
};

interface UserTransactionsProps {
  data: Transaction[];
}

const UserTransactions: React.FC<UserTransactionsProps> = ({ data }) => {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined);
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string | undefined>(undefined);
  const [dateTimeFilter, setDateTimeFilter] = useState<string | undefined>(undefined);

  const handleSearch = (selectedKeys: React.Key[], confirm: () => void, dataIndex: string) => {
    confirm();
    setSearchText(selectedKeys[0] as string);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const handleTypeFilter = (value: string) => {
    setTypeFilter(value);
  };

  const handlePaymentMethodFilter = (value: string) => {
    setPaymentMethodFilter(value);
  };

  const handleDateTimeFilter = (dates: any, dateStrings: [string, string]) => {
    setDateTimeFilter(dateStrings.join(','));
  };

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'id',
      key: 'id',
      filterIcon: () => <FaSearch className='text-black' />,
      onFilter: (value: any, record: any) => record.id.toLowerCase().includes(value.toLowerCase()),
      render: (text: string) => <a href="#">{text}</a>,
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
      filterIcon: () => <FaSearch className='text-black' />,
      onFilter: (value: any, record: any) => record.userId.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: 'Date and Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
      filterIcon: () => <FilterOutlined />,
      filterDropdown: ({ confirm, clearFilters }: any) => (
        <div style={{ padding: 8 }}>
          <RangePicker
            onChange={handleDateTimeFilter}
            style={{ width: 200 }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch([dateTimeFilter as React.Key], confirm, 'dateTime')}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      render: (text: string) => moment(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Transaction Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: 'Payment', value: 'payment' },
        { text: 'Refund', value: 'refund' },
      ],
      filterIcon: () => <FaFilter className='text-black' />,
      onFilter: (value: any, record: any) => record.type === value,
      render: (text: string) => text,
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      filters: [
        { text: 'Credit Card', value: 'creditCard' },
        { text: 'Wallet', value: 'wallet' },
      ],
      filterIcon: () => <FaFilter className='text-black' />,
      onFilter: (value: any, record: any) => record.paymentMethod === value,
      render: (text: string) => text,
    },
    // Add more columns as needed
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: number) => <>{text}</>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => <>{text}</>,
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
      render: (text: string) => <>{text}</>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined className="text-black" />} />
          <Button type="link" icon={<DeleteOutlined className="text-black" />} />
        </Space>
      ),
    },
  ];

  return (
    <div className="overflow-y-auto h-[90vh]">
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        bordered
        size="middle"
        pagination={false}
        className="shadow-2xl ml-4 font-poppins mt-5 bg-white pl-4 text-black overflow-hidden font-semibold"
      />
    </div>
  );
};
export default UserTransactions

// Dummy data for testing
const dummyData: Transaction[] = [
  {
    id: '1',
    userId: 'user1',
    dateTime: '2023-01-23T10:30:00',
    type: 'payment',
    amount: 100,
    status: 'success',
    details: 'Payment for services',
    paymentMethod: 'creditCard',
  },
  {
    id: '2',
    userId: 'user2',
    dateTime: '2023-01-24T12:45:00',
    type: 'refund',
    amount: 50,
    status: 'success',
    details: 'Refund for canceled order',
    paymentMethod: 'wallet',
  },
  // Add more dummy data as needed
];