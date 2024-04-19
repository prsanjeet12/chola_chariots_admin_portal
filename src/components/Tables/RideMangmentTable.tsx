import React, { useState,useRef } from 'react';
import { Button, Table, Tag, Modal, Popover,Input,Space } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactDragListView from 'react-drag-listview';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons'
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';

import { LatLngTuple } from 'leaflet';
import './style.css'

type RideMangementType ={
  rideID:string,
  user:string,
  driver:String,
  rideStatus:string,
  pickupLocation:string,
  dropOffLocation:string,
  liveLocation:string,
  startTime:string,
  endTime:string,
  driverStatus:string,
  userRating:number,
  notificationAlert:string,






}

type DataIndex = keyof RideMangementType;

const RideManagementTable: React.FC = () => {
 const [mapModalVisible, setMapModalVisible] = useState<boolean>(false);
 const [searchText, setSearchText] = useState('');
 const [searchedColumn, setSearchedColumn] = useState('');
 const searchInput = useRef<InputRef>(null);
  const [selectedLiveLocation, setSelectedLiveLocation] = useState<LatLngTuple | null>(null);
  const [filteredDrivers, setFilteredDrivers] = useState<any[]>([
  {
        rideID: '2',
        user: 'Jane Sm...',
        driver: 'Driver Y',
        rideStatus: 'Completed',
        pickupLocation: '789 Elm St...',
        dropOffLocation: '101 Pine St...',
        liveLocation: [34.0522, -118.2437],
        startTime: '2022-01-28 16:45:00',
        endTime: '2022-01-28 18:30:00',
        driverStatus: 'Offline',
        userRating: 5.0,
        notificationAlerts: [],
    },
    {
        rideID: '3',
        user: 'John D...',
        driver: 'Driver X',
        rideStatus: 'Completed',
        pickupLocation: '456 Oak...',
        dropOffLocation: '202 Mapl...',
        liveLocation: [40.7128, -74.0060],
        startTime: '2022-02-10 08:00:00',
        endTime: '2022-02-10 09:30:00',
        driverStatus: 'Offline',
        userRating: 4.5,
        notificationAlerts: [],
    },
    {
        rideID: '4',
        user: 'Alice Jo...',
        driver: 'Driver Z',
        rideStatus: 'Completed',
        pickupLocation: '321 Pine...',
        dropOffLocation: '505 El...',
        liveLocation: [37.7749, -122.4194],
        startTime: '2022-02-05 12:15:00',
        endTime: '2022-02-05 13:45:00',
        driverStatus: 'Offline',
        userRating: 4.8,
        notificationAlerts: [],
    },
    {
        rideID: '5',
        user: 'Emily Br...',
        driver: 'Driver W',
        rideStatus: 'Completed',
        pickupLocation: '909 Maple...',
        dropOffLocation: '707 Oak...',
        liveLocation: [41.8781, -87.6298],
        startTime: '2022-02-15 17:30:00',
        endTime: '2022-02-15 19:00:00',
        driverStatus: 'online',
        userRating: 4.2,
        notificationAlerts: [],
    },
    {
        rideID: '6',
        user: 'Michael Da...',
        driver: 'Driver V',
        rideStatus: 'Completed',
        pickupLocation: '606 Elm... ',
        dropOffLocation: '303 Oak...I',
        liveLocation: [39.9526, -75.1652],
        startTime: '2022-02-20 09:45:00',
        endTime: '2022-02-20 11:15:00',
        driverStatus: 'Offline',
        userRating: 4.9,
        notificationAlerts: [],
    },
    {
        rideID: '7',
        user: 'Sophia Wi...',
        driver: 'Driver U',
        rideStatus: 'Completed',
        pickupLocation: '404 Mapl...',
        dropOffLocation: '606 Pin...',
        liveLocation: [34.0522, -118.2437],
        startTime: '2022-02-25 14:00:00',
        endTime: '2022-02-25 15:30:00',
        driverStatus: 'online',
        userRating: 4.7,
        notificationAlerts: [],
    }
    // Add more sample data as needed
  ]);
  

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

  
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<RideMangementType> => ({
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
 


  const [columns, setColumns] = useState<any[]>([
    {
      title:  <span className='text-[15px] font-bold'>Ride ID</span>,
      dataIndex: 'rideID',
      key: 'rideID',
      ...getColumnSearchProps('rideID'),

      width:110, 
      sorter: (a: any, b: any) => a.rideID.localeCompare(b.rideID),
    },
    {
      title:  <span className='text-[15px] font-bold'>Rider</span>,
      dataIndex: 'user',
      width:110,
      key: 'user',
      ...getColumnSearchProps('user'),
      sorter: (a: any, b: any) => a.user.localeCompare(b.user),
    },
    {
      title:  <span className='text-[15px] font-bold'>Driver</span>,
      dataIndex: 'driver',
      key: 'driver',
      width:110,
      ...getColumnSearchProps('driver'),
      sorter: (a: any, b: any) => a.driver.localeCompare(b.driver),
    },
    {
      title:  <span className='text-[15px] font-bold'>Ride Status</span>,
      dataIndex: 'rideStatus',
      key: 'rideStatus',
      width:110,
      sorter: (a: any, b: any) => a.rideStatus.localeCompare(b.rideStatus),
      render: (status: string) => (
        <Tag color={status === 'Ongoing' ? 'blue' : status === 'Completed' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title:  <span className='text-[15px] font-bold'>PickUp Location</span>,
      dataIndex: 'pickupLocation',
      key: 'pickupLocation',
      ...getColumnSearchProps('pickupLocation'),
      width:140,
      sorter: (a: any, b: any) => a.pickupLocation.localeCompare(b.pickupLocation),
    },
    {
      title:  <span className='text-[15px] font-bold'>Drop Off</span>,
      dataIndex: 'dropOffLocation',
      key: 'dropOffLocation',
      ...getColumnSearchProps('dropOffLocation'),
      width:140,
      sorter: (a: any, b: any) => a.dropOffLocation.localeCompare(b.dropOffLocation),
    },
    {
      title:  <span className='text-[15px] font-bold'>Location</span>,
      dataIndex: 'liveLocation',
      key: 'liveLocation',
      width:100,

      sorter: (a: any, b: any) => a.liveLocation[0] - b.liveLocation[0],
      render: (liveLocation: LatLngTuple) => (
        <Button type="link" onClick={() => handleViewLocation(liveLocation)}>
          <EyeOutlined className='text-black'/>
        </Button>
      ),
    },
    {
      title:  <span className='text-[15px] font-bold'>Start Time</span>,
      dataIndex: 'startTime',
      key: 'startTime',
      width:155,
      sorter: (a: any, b: any) => moment(a.startTime).valueOf() - moment(b.startTime).valueOf(),
      render: (startTime: string) => moment(startTime).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: <span className='text-[15px] font-bold'>End Time</span>,
      dataIndex: 'endTime',
      key: 'endTime',
      width:155,
      sorter: (a: any, b: any) => moment(a.endTime).valueOf() - moment(b.endTime).valueOf(),
      render: (endTime: string) => (endTime ? moment(endTime).format('YYYY-MM-DD HH:mm:ss') : ''),
    },
    {
      title: <span className='text-[15px] font-bold'>Driver Status</span>,
      dataIndex: 'driverStatus',
      key: 'driverStatus',
      width: 120,
      sorter: (a: any, b: any) => a.driverStatus.localeCompare(b.driverStatus),
      render: (driverStatus: string) => {
        const color = driverStatus === 'online' ? 'green' : 'red';
        return (
          <Tag color={color} key={driverStatus}>
            {driverStatus.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title:  <span className='text-[15px] font-bold'>Rating</span>,
      dataIndex: 'userRating',
      key: 'userRating',
      width:120,
      sorter: (a: any, b: any) => a.userRating - b.userRating,
      render: (rating: number) => (rating ? `${rating}` : ''),
    },
    {
      // title: 'Notification',
      dataIndex: 'notificationAlerts',
      key: 'notificationAlerts',
      width:60,
      sorter: (a: any, b: any) => a.notificationAlerts.length - b.notificationAlerts.length,
      render: (alerts: string[]) => (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      ),
    },
  ]);


  const handleViewLocation = (location: LatLngTuple) => {
    setSelectedLiveLocation(location);
    setMapModalVisible(true);
  };
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
      setFilteredDrivers(prevDrivers =>
        [...prevDrivers].sort((a, b) => sorter.column.sorter(a, b))
      );
    } else if (sorter.order === 'descend') {
      setFilteredDrivers(prevDrivers =>
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
    <div className=' h-[100vh] w-[1300px]'>
      <h1 className='text-black text-3xl font-bold ml-4 mt-3'>Ride Management</h1>
      <div className='shadow-lg bg-white mt-5'>
    
      </div>
      <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
     
      <ReactDragListView.DragColumn {...dragProps}>
        <Table
          columns={columns}
          dataSource={filteredDrivers}
          rowKey="id"
          scroll={{ y: 600,x:900 }}
          size='small'
          rowClassName={`text-[15px] highlight-border `}
          pagination={false}  className="shadow-2xl ml-2 mr-3 
            font-poppins  mt-5 bg-white
           text-black custom-table 
            overflow-hidden font-semibold"
        onChange={handleTableChange}
          
        />
      </ReactDragListView.DragColumn>
      </div>
    </div>
  );
};

export default RideManagementTable;
