// RidersTransactionsTable.tsx
import React, { useState,useRef } from 'react';
import { Table, Tag, Space, Button,Input } from 'antd';
import moment from 'moment';
import { EyeOutlined } from '@ant-design/icons';
import ReactDragListView from 'react-drag-listview';
import RiderProfileModal from '../../Modals/RiderProfileModal'; // Import the UserProfileModal
import { SearchOutlined } from '@ant-design/icons'
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';

import { Tooltip } from 'antd';
import '../../Tables/style.css'

type TransactionType= {
  transactionID: string;
  userID: string;
  driverID: string;
  companyID: string;
  dateTime: string;
  transactionType: string;
  amount: number;
  status: string;
  details: string;
  paymentMethod: string;
}
type DataIndex = keyof TransactionType;

const RidersTransactionsTable: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null); // State to store the selected user
  const [userProfileModalVisible, setUserProfileModalVisible] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');

const [filteredTransactions,setFilterTransactions]=useState<any[]>( [
    {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },
    {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },   {
      transactionID: '123456',
      userID: 'user123',
      driverID: '121212332',
      companyID: 'companyABC',
      dateTime: '2024-01-25 10:30:00',
      transactionType: 'Payment',
      amount: 50.0,
      status: 'Completed',
      details: 'Ride payment',
      paymentMethod: 'Credit Card',
    },
    {
      transactionID: '789012',
      userID: 'user456',
      driverID: '121212332',
      companyID: 'companyXYZ',
      dateTime: '2024-01-25 12:45:00',
      transactionType: 'Refund',
      amount: 20.0,
      status: 'Refunded',
      details: 'Cancelled ride refund Cancelled ride refund Cancelled ride refund',
      paymentMethod: 'Wallet',
    },
    // Add more data as needed
  ]);

  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleView = (record: TransactionType) => {
    // Set the selected user when clicking on the Eye icon
    setSelectedUser({
      username: record.userID,
      email: 'user@example.com', // Replace with actual email
      dob: '1990-01-01', // Replace with actual date of birth
      bloodGroup: 'O+', 
    });

    // Show the User Profile modal
    setUserProfileModalVisible(true);
  };


  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<TransactionType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={`${selectedKeys[0] || ''}`}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <button
            className='bg-black text-white px-5 py-1 rounded-md'
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          
          
          >
            Search
          </button>
          <button className='bg-black text-white px-5 py-1 rounded-md'
            onClick={() => clearFilters && handleReset(clearFilters)}
          
          >
            Reset
          </button>
        
          
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined size={70} className='text-black  w-[100px] ' />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
 

  
  const [columns,setColumns] =useState<any[]>( [
    {
      title: <span className='font-bold text-[15px] font-poppins'>Transaction ID</span>,
      dataIndex: 'transactionID',
      key: 'transactionID',
      ...getColumnSearchProps('transactionID'),
      width:160,
      sorter: (a: TransactionType, b: TransactionType) => a.transactionID.localeCompare(b.transactionID)
      
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Rider ID</span>,
      dataIndex: 'userID',
      key: 'userID',
      ...getColumnSearchProps('userID'),
      width:110,
      sorter:(a: TransactionType,b: TransactionType)=>a.userID.localeCompare(b.userID)
      
    },
    {
      title: <span className='font-bold text-[15px] '>Driver ID</span>,
      dataIndex: 'driverID',
      key: 'driverID',
     
      ...getColumnSearchProps('driverID'),
      width:114,
      sorter:(a:any,b:any)=>a.driverID.localeCompare(b.driverID)
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Company ID</span>,
      dataIndex: 'companyID',
      width:130,
      ...getColumnSearchProps('companyID'),
      key: 'companyID',
      sorter:(a:any,b:any)=>a.companyID.localeCompare(b.companyID)
    },
    {
      title: (
        <span className='font-bold text-[15px] font-poppins'>
          Date and Time
        </span>
      ),
      dataIndex: 'dateTime',
      key: 'dateTime',
      width:150,
      render: (dateTime: string) => (
        <Tooltip title={<span>{moment(dateTime).format('YYYY-MM-DD HH:mm:ss')}</span>}>
          <span>{moment(dateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
        </Tooltip>
      ),
      sorter: (a: any, b: any) => a.dateTime.localeCompare(b.dateTime),
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Transaction Type</span>,
      dataIndex: 'transactionType',
      key: 'transactionType',
      width:150,
      sorter:(a:any,b:any)=>a.transactionType.localeCompare(b.transactionType)
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Amount</span>,
      dataIndex: 'amount',
      key: 'amount',
      width:80,
      ...getColumnSearchProps('amount'),
      render: (amount: number) => `$${amount.toFixed(2)}`,
      sorter:(a:any,b:any)=>a.userID.localeCompare(b.userID)
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Status</span>,
      dataIndex: 'status',
      key: 'status',
      width:90,
    
      sorter:(a:any,b:any)=>a.status.localeCompare(b.status),
      render: (status: string) => (
        <Tag color={status === 'Completed' ? 'green' : status === 'Refunded' ? 'red' : 'default'}>
          {status}
        </Tag>
        
        
      ),
    },
    {
      title: (
        <span className='font-bold text-[15px] font-poppins'>
          Details
        </span>
      ),
      dataIndex: 'details',
      key: 'details',
      width: 110,
      sorter: (a: any, b: any) => a.details.localeCompare(b.details),
      render: (text: string) => (
        <Tooltip title={text}>
          <span className="truncate w-[100px] block">{text}</span>
        </Tooltip>
      ),
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Payment Methods</span>,
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      width:150,
      sorter:(a:any,b:any)=>a.paymentMethod.localeCompare(b.paymentMethod)
    },
    {
      title: <span className='font-bold text-[15px] font-poppins'>Action</span>,
      key: 'action',
      sorter:(a:any,b:any)=>a.userID.localeCompare(b.userID),
      width:80,
      render: (text: any, record: TransactionType) => (
        <Space size="middle">
          <Button
          className='text-black'
          type='link'
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
             // Open the modal on Eye icon click
          />
        </Space>
      ),
    },
  ]);
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setColumns(prevColumns =>
      prevColumns.map(column => {
        if (column.key === sorter.field) {
          return {
            ...column,
            sortOrder: sorter.order,
          };
        }
        return {
          ...column,
          sortOrder: false,
        };
      })
    );

    if (sorter.order === 'ascend') {
      setFilterTransactions(prevDrivers =>
        [...prevDrivers].sort((a, b) => sorter.column.sorter(a, b))
      );
    } else if (sorter.order === 'descend') {
      setFilterTransactions(prevDrivers =>
        [...prevDrivers].sort((a, b) => sorter.column.sorter(b, a))
      );
    }
  };


  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const updatedColumns = [...columns];
      const item = updatedColumns.splice(fromIndex, 1)[0];
      updatedColumns.splice(toIndex, 0, item);
      setColumns(updatedColumns);
    },
    nodeSelector: 'th',
  };

  return (
    <div className='w-[1300px]'>
      <h1 className="font-bold text-2xl font-poppins mt-2 ml-4">Rider Transactions</h1>
      <div className='ml-3 mr-3 font-poppins mt-5 text-black overflow-hidden font-semibold'>
      <ReactDragListView.DragColumn {...dragProps}>
      <Table
        dataSource={filteredTransactions}
        columns={columns}
        rowClassName={`text-[15px] highlight-border `}
        bordered
        pagination={false}
        scroll={{ y: 600,x:900 }}
        className="shadow-2xl ml-2 mr-3 
        font-poppins  mt-5 bg-white
       text-black custom-table 
        overflow-hidden font-semibold"
        size='small'
      />
       </ReactDragListView.DragColumn>

       </div>
     
    </div>
  );
};

export default RidersTransactionsTable;
