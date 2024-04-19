// PaymentMethodTable.tsx

import React, { useState,useRef } from 'react';
import { Table, Tag, Button, Modal, Form,  Switch,Input, Select,Space, DatePicker, } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { PaymentMethodData, dummyData } from '../../Data/PaymentMethodData';
import useInfiniteScroll from '../Hooks/useInfiniteScroll';
import { SearchOutlined } from '@ant-design/icons';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import ReactDragListView from 'react-drag-listview';import './style.css'


type PaymentMethodType={
  key: string;
  paymentMethod: string;
  addedBy: string;
  addedOn: Date;
  updatedBy: string;
  updatedOn: Date; 
  isBanned: boolean;
  bannedBy?: string;
  bannedReason?: string;
}

type DataIndex = keyof PaymentMethodType;
const PaymentMethodTable: React.FC = () => {
  const [paymentMethodfilter, setPaymentfilter] = useState<any[]>([
    {
      key: '1',
      paymentMethod: 'Credit Card',
      addedBy: 'Admin 1',
      addedOn: new Date('2022-01-15T12:00:00'),
      updatedBy: 'Admin 2',
      updatedOn: new Date('2022-01-16T14:30:00'),
      isBanned: false,
      bannedBy: undefined,
      bannedReason: undefined,
    },
    {
      key: '2',
      paymentMethod: 'PayPal',
      addedBy: 'Admin 3',
      addedOn: new Date('2022-01-18T10:45:00'),
      updatedBy: 'Admin 2',
      updatedOn: new Date('2022-01-19T11:20:00'),
      isBanned: true,
      bannedBy: 'Admin 4',
      bannedReason: 'Fraudulent activity',
    },
    {
      key: '3',
      paymentMethod: 'Bank Transfer',
      addedBy: 'Admin 5',
      addedOn: new Date('2022-01-20T09:15:00'),
      updatedBy: 'Admin 5',
      updatedOn: new Date('2022-01-21T13:55:00'),
      isBanned: false,
      bannedBy: undefined,
      bannedReason: undefined,
    },
    {
      key: '4',
      paymentMethod: 'Cash',
      addedBy: 'Admin 2',
      addedOn: new Date('2022-01-22T14:20:00'),
      updatedBy: 'Admin 6',
      updatedOn: new Date('2022-01-23T10:10:00'),
      isBanned: true,
      bannedBy: 'Admin 7',
      bannedReason: 'Non-compliance with policy',
    },
    {
      key: '5',
      paymentMethod: 'Debit Card',
      addedBy: 'Admin 4',
      addedOn: new Date('2022-01-25T08:30:00'),
      updatedBy: 'Admin 5',
      updatedOn: new Date('2022-01-26T09:45:00'),
      isBanned: false,
      bannedBy: undefined,
      bannedReason: undefined,
    },
    {
      key: '6',
      paymentMethod: 'Cheque',
      addedBy: 'Admin 3',
      addedOn: new Date('2022-01-28T15:00:00'),
      updatedBy: 'Admin 6',
      updatedOn: new Date('2022-01-29T16:20:00'),
      isBanned: true,
      bannedBy: 'Admin 1',
      bannedReason: 'Insufficient funds',
    },
    {
      key: '7',
      paymentMethod: 'Google Pay',
      addedBy: 'Admin 7',
      addedOn: new Date('2022-01-30T11:40:00'),
      updatedBy: 'Admin 7',
      updatedOn: new Date('2022-01-31T12:05:00'),
      isBanned: false,
      bannedBy: undefined,
      bannedReason: undefined,
    },
  ]
  )
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<PaymentMethodData | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  


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

  

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<PaymentMethodType> => ({
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
 



 







  const showModal = (record: PaymentMethodData) => {
    setSelectedData(record);
    setModalVisible(true);
  };



  
  const [columns, setColumns] =useState<any[]>( [
    {
      title: <span className='text-[15px] font-bold'>Id</span>,
      dataIndex: 'paymentMethod',
      ...getColumnSearchProps('paymentMethod'),
      width:120,
      sorter: (a: PaymentMethodType, b: PaymentMethodType) => a.paymentMethod.localeCompare(b.paymentMethod),
      key: 'paymentMethod',
    },
    {
      title: <span className='text-[15px] font-bold'>Add By</span>,
      dataIndex: 'addedBy',
      ...getColumnSearchProps('addedBy'),
      key: 'addedBy',
    },
    {
        title: <span className='text-[15px] font-bold'>Added On</span>,
        dataIndex: 'addedOn',
        ...getColumnSearchProps('addedOn'),
        key: 'addedOn',
        render: (addedOn: Date) => addedOn.toLocaleDateString(),
      },
    {
      title: <span className='text-[15px] font-bold'>Updated By</span>,
      dataIndex: 'updatedBy',
      ...getColumnSearchProps('updatedBy'),
      key: 'updatedBy',
    },
    {
        title: <span className='text-[15px] font-bold'>Updated On</span>,
        dataIndex: 'updatedOn',
        ...getColumnSearchProps('updatedOn'),
        key: 'updatedOn',
        render: (updatedOn: Date) => updatedOn.toLocaleDateString(),
      },
    {
      title: <span className='text-[15px] font-bold'>IsBanned</span>,
      dataIndex: 'isBanned',
      ...getColumnSearchProps('isBanned'),
      key: 'isBanned',
      render: (isBanned: boolean) => (isBanned ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>),
    },
    {
      title: <span className='text-[15px] font-bold'>Banned By</span>,
      dataIndex: 'bannedBy',
      ...getColumnSearchProps('bannedBy'),
      key: 'bannedBy',
    },
    {
      title: <span className='text-[15px] font-bold'>Banned Reason</span>,
      dataIndex: 'bannedReason',
      ...getColumnSearchProps('bannedReason'),
      key: 'bannedReason',
     
    },
    {
      title: <span className='text-[15px] font-bold'>Action</span>,
      key: 'action',
      render: (_: any, record: PaymentMethodData) => (
        <Button type="link" onClick={() => showModal(record)}>
          Edit
        </Button>
     
     ),
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
    <div className="overflow-y-auto h-[100vh]"  >
        <h1 className='text-black text-2xl  font-bold  ml-4 mt-3'>Payment Methods</h1>
        
      <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
     

     <ReactDragListView.DragColumn {...dragProps}>
      <Table
         columns={columns}
        dataSource={paymentMethodfilter}
     
        bordered
        size="small"
     
        loading={loading}
        rowClassName={`text-[15px] highlight-border `}
        pagination={false}  className="shadow-2xl ml-2 mr-3 
          font-poppins  mt-5 bg-white
         text-black custom-table 
          overflow-hidden font-semibold"
      />
     </ReactDragListView.DragColumn>

</div>
    </div>
  );
};

export default PaymentMethodTable;
