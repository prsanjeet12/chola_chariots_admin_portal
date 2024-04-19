import React, { useState ,useRef} from 'react';
import { Table, Tag, Space ,Input,Button} from 'antd';
import moment from 'moment';
import ReactDragListView from 'react-drag-listview';
import TruncateText from '../../components/utils/TurncateText'
import { SearchOutlined } from '@ant-design/icons'; // Import SearchOutlined from Ant Design
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';

type RideBooingType ={
  bookingId:string,
  userInformation:string,
  driverInformation:string,
  pickUpLocation:string,
  dropoffLocation:string,
  bookingTime:string,
  ridestatus:String,
  pricingDetails:string,
  vehicleType:string,
  specialRequests:string,
  notificationAlerts:string,
  cancellationReasons:string,






}
type DataIndex = keyof RideBooingType;

const RideBookingTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  

const [filteredRides, setFilterRides]=useState<any[]>([
 
  {
    bookingId: '1',
    userInformation: 'John Doe',
    driverInformation: 'Driver X',
    pickUpLocation: '123 Mai...',
    dropOffLocation: '456 Oa...',
    bookingTime: '2022-01-28 14:30:00',
    rideStatus: 'Confirmed',
    pricingDetails: '$25.00',
    vehicleType: 'Sedan',
    specialRequests: 'None',
    notificationAlerts: 'No alerts',
    cancellationReasons: '',
  },
  {
    bookingId: '2',
    userInformation: 'Jane Smith',
    driverInformation: 'Driver Y',
    pickUpLocation: '789 El...',
    dropOffLocation: '101 Pi...',
    bookingTime: '2022-01-28 16:45:00',
    rideStatus: 'Pending',
    pricingDetails: '$20.00',
    vehicleType: 'SUV',
    specialRequests: 'Child seat needed',
    notificationAlerts: 'New booking alert',
    cancellationReasons: '',
  },
  // Add more dummy data as needed

])


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



const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<RideBooingType> => ({
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
    title:<span className='text-[15px] font-bold'>Booking Id</span>, 
    dataIndex: 'bookingId', 
    key: 'bookingId',
    ...getColumnSearchProps('bookingId'),
    width:110, 
    sorter: (a: any, b: any) => a.bookingId.localeCompare(b.bookingId),
   
  },
  { 
    title: <span className='text-[15px] font-bold'>Rider</span>, 
    dataIndex: 'userInformation', 
    key: 'userInformation',
    ...getColumnSearchProps('userInformation'),
    width: 110,
    render: (text: string) => <TruncateText text={text} maxLength={7} />,
    sorter: (a: any, b: any) => a.userInformation.localeCompare(b.userInformation)
  },
  { 
    title: <span className='text-[15px] font-bold'>Driver</span>, 
    dataIndex: 'driverInformation', 
    key: 'driverInformation',
    ...getColumnSearchProps('driverInformation'),
    width: 110,
    sorter: (a: any, b: any) => a.driverInformation.localeCompare(b.driverInformation)
  },
  { 
    title: <span className='text-[15px] font-bold'>Pickup Location</span>, 
    dataIndex: 'pickUpLocation', 
    key: 'pickUpLocation',
    ...getColumnSearchProps('pickUpLocation'),

    width:150,
    sorter: (a: any, b: any) => a.pickUpLocation.localeCompare(b.pickUpLocation)
  },
  { 
    title: <span className='text-[15px] font-bold'>DropOff Location</span>, 
    dataIndex: 'dropOffLocation', 
    ...getColumnSearchProps('dropoffLocation'),
    key: 'dropOffLocation',
    width:150,
   
    sorter: (a: any, b: any) => a.dropOffLocation.localeCompare(b.dropOffLocation)
  },
  { 
    title: <span className="text-[15px] font-bold">Booking Time</span>, 
    dataIndex: 'bookingTime', 
    key: 'bookingTime',
   width:150,
    sorter: (a: any, b: any) => moment(a.bookingTime).valueOf() - moment(b.bookingTime).valueOf()
  },
  { 
    title: <span className="text-[15px] font-bold">Ride Status</span>, 
    dataIndex: 'rideStatus', 
    key: 'rideStatus',
 width:130,
    sorter: (a: any, b: any) => a.rideStatus.localeCompare(b.rideStatus)
  },
  { 
    title: <span className="text-[15px] font-bold">Ride Fare</span>, 
    dataIndex: 'pricingDetails', 
    key: 'pricingDetails',
    width:110,
    sorter: (a: any, b: any) => a.pricingDetails.localeCompare(b.pricingDetails)
  },
  { 
    title:  <span className="text-[15px] font-bold">Vehicle Type</span>, 
    dataIndex: 'vehicleType', 
    ...getColumnSearchProps('vehicleType'),
    key: 'vehicleType',
    width:126,
    sorter: (a: any, b: any) => a.vehicleType.localeCompare(b.vehicleType)
  },
  { 
    title:  <span className="text-[15px] font-bold">Special Requests</span>,
    dataIndex: 'specialRequests', 
    key: 'specialRequests',
    width:140,
  
    sorter: (a: any, b: any) => a.specialRequests.localeCompare(b.specialRequests)
  },
  { 
    title: <span className="text-[15px] font-bold">Notification Alerts</span>,
    dataIndex: 'notificationAlerts', 
    key: 'notificationAlerts',
    width:110,
    sorter: (a: any, b: any) => a.notificationAlerts.localeCompare(b.notificationAlerts)
  },
  // { 
  //   title: 'Cancellation Reasons', 
  //   dataIndex: 'cancellationReasons', 
  //   key: 'cancellationReasons',
  //   sorter: (a: any, b: any) => a.cancellationReasons.localeCompare(b.cancellationReasons)
  // }

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
  
  <div className='w-[1330px]'>
    <h1 className='font-bold text-2xl font-poppins mt-2 ml-4'>Ride Booking</h1>
    <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
    <ReactDragListView.DragColumn {...dragProps}>
  <Table
   bordered
  size='small'
  dataSource={filteredRides}
  columns={columns}
   rowKey="pickUpLocation"
   scroll={{ y: 600,x:900 }}

   rowClassName={`text-[15px] highlight-border `}
   pagination={false}  className="shadow-2xl ml-2 mr-3 
     font-poppins  mt-5 bg-white
    text-black custom-table 
     overflow-hidden font-semibold" />
     </ReactDragListView.DragColumn>
     </div>
     </div>
  )
};

export default RideBookingTable;