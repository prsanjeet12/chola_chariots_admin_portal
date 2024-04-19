import React, { useState,useRef } from 'react';
import { Table, Tag, Input, Select, Modal, DatePicker,Space } from 'antd';

import { dummyRides, RideData } from '../../Data/RideData';
import useInfiniteScroll from '../Hooks/useInfiniteScroll'
import ReactDragListView from 'react-drag-listview';
import { dummyData } from '../../Data/PaymentMethodData';
import { PlusOutlined, EyeOutlined,EditOutlined, DeleteOutlined,SearchOutlined , CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';

import './style.css'


type RideType={
  key: string;
  riderUser: string;
  driverUser: string;
  vehicleType: string;
  pickupLocation: string;
  dropLocation: string;
  fare: string;
  paymentMethod: string;
  status: number;
  cancelledReason?: string;
  rideRating: number;
  createdOn: Date;
  currentDate: Date;
  distanceTraveled: number
}
type DataIndex = keyof RideType;


const RideHistoryTable: React.FC = () => {
  const [RideHistoryfilter, setRideHistoryfilter] = useState<any[]>([

    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Sec...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '2',
      riderUser: 'Alice Smith',
      driverUser: 'Bob Johnson',
      vehicleType: 'SUV',
      pickupLocation: '789 Elm St',
      dropLocation: '101 Oak St',
      fare: '$30.00',
      paymentMethod: 'Cash',
      status: 1, // In progress
      cancelledReason: undefined,
      rideRating: 5,
      createdOn: new Date('2022-02-20'),
      currentDate: new Date('2024-02-20'),
    },
    {
      key: '3',
      riderUser: 'Emily Brown',
      driverUser: 'David Wilson',
      vehicleType: 'Van',
      pickupLocation: '246 Pine Ave',
      dropLocation: '369 Maple Blvd',
      fare: '$25.00',
      paymentMethod: 'Credit Card',
      status: 2, // Completed
      cancelledReason: undefined,
      rideRating: 4,
      createdOn: new Date('2022-03-25'),
      currentDate: new Date('2024-03-25'),
    },
    {
      key: '4',
      riderUser: 'Sarah Johnson',
      driverUser: 'Michael Davis',
      vehicleType: 'Sedan',
      pickupLocation: '555 Cherry Ln',
      dropLocation: '777 Olive Rd',
      fare: '$18.50',
      paymentMethod: 'Credit Card',
      status: 3, // Cancelled
      cancelledReason: 'Driver unavailable',
      rideRating: 3,
      createdOn: new Date('2022-04-10'),
      currentDate: new Date('2024-04-10'),
    },
    //
  ])
  const [loading, setLoading] = useState(false);
  const [RideHistory, setRideHistory] = useState(dummyData);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [filters,setFilters]=useState<{[key:string]:any}>({})

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

  

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<RideType> => ({
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
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
    (record[dataIndex]?.toString().toLowerCase().includes((value as string).toLowerCase())) || false,
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

  const onFetchMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newData = dummyData.slice(RideHistory.length, RideHistory.length + 10);
      setRideHistory((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000);
  };

  const { tableRef } = useInfiniteScroll({
    data: RideHistory,
    onFetchMore,
    loading,
  });



  const [columns,setColumns] =useState<any[]>(  [
    {
      title: <span className='text-[15px] font-bold'>rider</span>,
      width:120,
      dataIndex: 'riderUser',
      ...getColumnSearchProps('riderUser'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      key: 'riderUser',
    
    },
    {
      title: <span className='text-[15px] font-bold'>driver</span>,
      dataIndex: 'driverUser',
      width:120,
      ...getColumnSearchProps('driverUser'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      key: 'driverUser',
    
    },
    {
      title: <span className='text-[15px] font-bold'>vehicleType</span>,
      dataIndex: 'vehicleType',
      ...getColumnSearchProps('vehicleType'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:120,
      key: 'vehicleType',

    },
    {
      title: <span className='text-[15px] font-bold'>pickupLocation</span>,
      dataIndex: 'pickupLocation',
      ...getColumnSearchProps('pickupLocation'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:130,
      key: 'pickupLocation',

    },
    {
      title: <span className='text-[15px] font-bold'>dropLocation</span>,
      dataIndex: 'dropLocation',
      ...getColumnSearchProps('dropLocation'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:130,
      key: 'dropLocation',
      
    },
    {
      title: <span className='text-[15px] font-bold'>fare</span>,
      dataIndex: 'fare',
      ...getColumnSearchProps('fare'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:120,
      key: 'fare',
    },
    {
      title:<span className='text-[15px] font-bold'>paymentMethod</span>,
      dataIndex: 'paymentMethod',
      ...getColumnSearchProps('paymentMethod'),
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:140,
      key: 'paymentMethod',
   
    },
    {
      title: <span className='text-[15px] font-bold'>status</span>,
      dataIndex: 'status',
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:120,
      key: 'status',
     
    },
    {
      title: <span className='text-[15px] font-bold'>cancelledReason</span>,
      dataIndex: 'cancelledReason',
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:140,
      key: 'cancelledReason',
    },
    {
      title: <span className='text-[15px] font-bold'>rideRating</span>,
      dataIndex: 'rideRating',
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:120,
      key: 'rideRating',
     
    },
    {
      title: <span className='text-[15px] font-bold'>createdOn</span>,
      dataIndex: 'createdOn',
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:120,
      key: 'createdOn',
     
    },
    {
      title: <span className='text-[15px] font-bold'>currentDate</span>,
      dataIndex: 'currentDate',
      sorter: (a: RideType, b: RideType) => a.key.localeCompare(b.key),
      width:120,
      key: 'currentDate',
      render: (currentDate: Date) => currentDate.toLocaleDateString(),
    },
  ]);

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
    <div className="w-[1300px] h-[90vh] font-poppins" ref={tableRef} >
        <h1 className='text-black text-3xl  font-bold  ml-4 mt-3'>Rider History</h1>
      <div className='shadow-lg bg-white fixed-height-table'>
   
      </div>
      
      <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
      <ReactDragListView.DragColumn {...dragProps}>
      <Table
        columns={columns}
        dataSource={RideHistoryfilter}
        bordered 
        scroll={{y:600,x:900 }}
        rowKey="id"
        size='small'
       
      
        loading={loading}
         
       rowClassName={`text-[15px] highlight-border `}
       pagination={false}  className="shadow-2xl ml-2 mr-3 
         font-poppins  mt-5 bg-white
        text-black custom-table 
         overflow-hidden font-semibold"
      />  </ReactDragListView.DragColumn>
      </div>
    </div>
  );
};

export default RideHistoryTable;
