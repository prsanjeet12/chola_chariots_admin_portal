
import React,{useState,useRef} from 'react';
import { Button, Space, Table, Tag,Input } from 'antd';
import '../style.css'
import { EyeOutlined } from '@ant-design/icons';
import RiderProfileModal from '../../Modals/RiderProfileModal'; // Import the UserProfileModal
import ReactDragListView from 'react-drag-listview';
import useInfiniteScroll from '../../Hooks/useInfiniteScroll';

import moment from 'moment';
import { LatLngTuple } from 'leaflet';
import { SearchOutlined } from '@ant-design/icons'
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';

import { Tooltip } from 'antd';
import '../../Tables/style.css'
import '../../Tables/style.css'

type RefundType= {
  refundRequestId: string;
  rider: string;
  transactionId: string;
  dateTime: string;
  refundAmount: number;
  refundStatus: string;
  reason: string;
  paymentMethod: string;
  paymentProcessingStatus: string;
}
type DataIndex = keyof RefundType;



const RiderRefundsTable: React.FC = () => {
  const [userProfileModalVisible, setUserProfileModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [searchText, setSearchText] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null); // State to store the selected user
  const [Refundsfilter,setRefundfilter]=useState<any[]> ( [
    {
      refundRequestId: '1',
      rider : 'John Doe',
      transactionId: 'T123456',
      dateTime: '2022-01-28 14:30:00',
      refundAmount: 50.0,
      refundStatus: 'processed',
      reason: 'Cancelled trip',
      paymentMethod: 'Credit Card',
      paymentProcessingStatus: 'completed',
    },
    {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },  {
      refundRequestId: '2',
      rider: 'Jane Smith',
      transactionId: 'T789012',
      dateTime: '2022-01-28 16:45:00',
      refundAmount: 20.0,
      refundStatus: 'declined',
      reason: 'Late arrival',
      paymentMethod: 'Wallet',
      paymentProcessingStatus: 'pending',
    },
    // Add more dummy data as needed
  ]);
  const [refunds,setrefunds]=useState(Refundsfilter)

  const handleView = (record: RefundType) => {
    // Set the selected user when clicking on the Eye icon
    setSelectedUser({
      username: record.rider,
      email: 'user@example.com', // Replace with actual email
      dob: '1990-01-01', // Replace with actual date of birth
      bloodGroup: 'O+', // Replace with actual blood group
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

  
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<RefundType> => ({
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
      title: <span className='font-bold text-[15px]'>Refund Id</span>,
      dataIndex: 'refundRequestId',
      width:120,
      ...getColumnSearchProps('refundRequestId'),
      sorter:(a:any,b:any)=>a.refundRequestId.localeCompare(b.refundRequestId),
      key: 'refundRequestId',
    },
    {
      title: <span className='font-bold text-[15px]'> Rider</span>,
      dataIndex: 'rider',
      width:110,
      
      ...getColumnSearchProps('rider'),
      sorter:(a:any,b:any)=>a.rider.localeCompare(b.rider),
   
      key: 'rider',
    },
    {
      title: <span className='font-bold text-[15px]'> Transaction ID</span>,
      dataIndex: 'transactionId',
      width:160,
      ...getColumnSearchProps('transactionId'),
      sorter:(a:any,b:any)=>a.transactionId.localeCompare(b.transactionId),
      key: 'transactionId',
    },
    {
      title: <span className='font-bold text-[15px]'>Date and Time</span>,
      dataIndex: 'dateTime',
      sorter:(a:any,b:any)=>a.refundRequestId.localeCompare(b.refundRequestId),
      key: 'dateTime',
      width:160,
      render: (dateTime: string) => moment(dateTime).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: <span className='font-bold text-[15px]'>Refund Amount</span>,
      dataIndex: 'refundAmount',
      ...getColumnSearchProps('refundAmount'),
      sorter:(a:any,b:any)=>a.dateTime.localeCompare(b.dateTime),
      key: 'refundAmount',
      width:160,
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: <span className='font-bold text-[15px]'>Refund Status</span>,
      dataIndex: 'refundStatus',
      key: 'refundStatus',
      width:140,
      sorter:(a:any,b:any)=>a.refundStatus.localeCompare(b.refundStatus),
      render: (status: string) => (
        <Tag color={status === 'processed' ? 'green' : status === 'declined' ? 'red' : 'default'}>
          {status}
        </Tag>
      ),
    },
    {
      title: <span className='font-bold text-[15px]'> Reason Of Refund</span>,
      dataIndex: 'reason',
      width:155,
      sorter:(a:any,b:any)=>a.reason.localeCompare(b.reason),
      
      key: 'reason',
    },
    {
      title: <span className='font-bold text-[15px]'>Payment Method</span>,
      dataIndex: 'paymentMethod',
      width:160,
      sorter:(a:any,b:any)=>a.refundRequestId.localeCompare(b.refundRequestId),
      key: 'paymentMethod',
    },
    {
      title: <span className='font-bold text-[15px]'>Payment Status</span>,
      dataIndex: 'paymentProcessingStatus',
      width:160,
      sorter:(a:any,b:any)=>a.refundRequestId.localeCompare(b.refundRequestId),
      key: 'paymentProcessingStatus',
    },
    {
      title: <span className='font-bold text-[14px]'>Action</span>,
      key: 'action',
      width:100,
      sorter:(a:any,b:any)=>a.refundRequestId.localeCompare(b.refundRequestId),
      render: (text: any, record: RefundType) => (
        <Space size='middle'> 
          <Button
            className='text-black'
            type='link'
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          />
        </Space>
      ),
    }
  ]);

  const onFetchMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newData = Refundsfilter.slice(refunds.length, refunds.length + 10);
      setrefunds((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000);
  };


  const { tableRef } = useInfiniteScroll({
    data: Refundsfilter,
    onFetchMore,
    loading,
  });

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
      setRefundfilter(prevrefund =>
        [...prevrefund].sort((a, b) => sorter.column.sorter(a, b))
      );
  } else if (sorter.order === 'descend') {
      setRefundfilter(prevrefund =>
        [...prevrefund].sort((a, b) => sorter.column.sorter(b, a))
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
    <div className='h-[100vh] w-[1300px]' ref={tableRef}>
      <h1 className='font-bold text-2xl font-poppins mt-2 ml-'>Rider Refunds Table</h1>
      <ReactDragListView.DragColumn {...dragProps}>
      <Table dataSource={Refundsfilter} columns={columns}
        bordered
        size='small'
        scroll={{ y: 600,x:900}}
      rowClassName={`text-[16px] highlight-border `}
       pagination={false}  className="shadow-2xl ml-3 
        mr-3 font-poppins
          mt-5 bg-white
        text-black  custom-table
          overflow-hidden rounded-lg font-semibold"
      />
         </ReactDragListView.DragColumn>

       {selectedUser && (
        <RiderProfileModal
          visible={userProfileModalVisible}
          onCancel={() => setUserProfileModalVisible(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default RiderRefundsTable;