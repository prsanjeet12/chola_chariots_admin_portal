// AdminTable.tsx
import React, { useState,useRef } from 'react';
import { Table, Button, Space, Tag ,Card, Popover,Modal, Input, Select, DatePicker, } from 'antd';
import AdminCreateModal from '../Modals/AdminCreateForm';
import EditUserModal from '../Modals/EditUserModal';
import { PlusOutlined, EyeOutlined,EditOutlined, DeleteOutlined,SearchOutlined , CloseOutlined } from '@ant-design/icons';
import './style.css'
import ReactDragListView from 'react-drag-listview';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';

const { Option } = Select;


type UserType = {
  id: number;
  name: string;
  role: number;
  username: string;
  email: string;
  password: string;
  isBanned: boolean;
  bannedReason: string;
  createdOn: string;
  updatedOn: string;
  companyCode: string; 
  company: string; 

}
type DataIndex = keyof UserType;

const AdminTable: React.FC = () => {
  const [adminfilter, setAdminfilter] = useState<any[]>([
    {
      id: 1,
      name: 'John Doe',
      role: 0,
      username: 'john_doe',
      email: 'john23@gmail.com',
      password: '********',
      isBanned: false,
      bannedReason: '',
      createdOn: '2022-01-01',
      updatedOn: '2022-01-05',
      companyCode: 'XYZ123', 
      company: 'ABC Corporation',
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 1,
      username: 'jane_doe',
      email: 'jane23@gmail.com',
      password: '********',
      isBanned: true,
      bannedReason: 'Violation of terms',
      createdOn: '2022-01-02',
      updatedOn: '2022-01-06',
      companyCode: 'DEF456', 
      company: 'XYZ Inc.', 
    },
    
  ]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedUser, setEditedUser] = useState<UserType | null>(null);
  const [createAdminVisible, setCreateAdminVisible] = useState(false);

  const [selectedBannedReason, setSelectedBannedReason] = useState<string | null>(null);
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

  

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<UserType> => ({
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
 
  const handleViewBannedReason = (reason: string) => {
    setSelectedBannedReason(reason);
  };

  const renderBannedReason = (reason: string) => (
    <div onClick={() => handleViewBannedReason(reason)} className='underline cursor-pointer'>view</div>
  );
  const renderActions = (record: UserType) => (
    <Popover
      placement="bottom"
      title={null}
      content={
        <div className="flex space-x-2">
        <Button type="link" className='text-black' icon={<EditOutlined />} onClick={() => handleEdit(record)} />
        <Button type="link" className='text-black' icon={<DeleteOutlined />} />
        <Button type="link" className='text-black' icon={<EyeOutlined />} />
      </div>
      }
      trigger="click"
    >
     <div className='cursor-pointer'>more</div>
    </Popover>
  );



  const [columns, setColumns] = useState<any[]>([
    {
      title: <span className='text-[15px] font-bold'>Id</span>,
      ...getColumnSearchProps('id'),
      dataIndex: 'id',
      width:70,
     
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      key: 'id',
     
    },
    {
      title: <span className="text-[15px] font-bold">UserName</span>,
      ...getColumnSearchProps('name'),
      dataIndex: 'name',
      width:130,
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      key: 'name',
    },


    {
      title: <span className='text-[15px] font-bold'>Role</span>,
      dataIndex: 'role',
      width: 50,
      sorter: (a: UserType, b: UserType) => a.id - b.id,
      key: 'role',
      filters: [
        { text: 'Admin', value: 0 },
        { text: 'Representative', value: 1 },
        { text: 'Sub Admin', value: 2 },
      ],
      onFilter: (value: number, record: UserType) => record.role === value, // Specify types for value and record
      render: (role: number) => (
        <Tag
          color={
            role === 0 ? 'blue' : role === 1 ? 'green' : role === 2 ? 'orange' : 'gray'
          }
        >
          {role === 0 ? 'Admin' : role === 1 ? 'Representative' : 'Sub Admin'}
        </Tag>
      ),
    },
    {
      title: <span className='text-[15px] text-center font-bold'>Email</span>,
      ...getColumnSearchProps('email'),
      dataIndex: 'email',
      width:60,
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      key: 'email',
    },
    {
      title: <span className='font-bold text-[15px]'>Company Code</span>,
      ...getColumnSearchProps('companyCode'),
      dataIndex: 'companyCode',
      width:140,
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      key: 'companyCode',
    },
    {
      title: <span className='font-bold text-[15px]'>Company</span>,
   
      dataIndex: 'company',
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      width:50,
      ...getColumnSearchProps('company'),
      key: 'company',
    },
    {
      title: <span className='text-[15px] font-bold'>Is Banned</span>,
      dataIndex: 'isBanned',
      width: 114,
      key: 'isBanned',
      sorter: (a: UserType, b: UserType) => a.id - b.id,
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value: boolean, record: UserType) => record.isBanned === value,
      render: (isBanned: boolean) => (
        <Tag color={isBanned ? 'red' : 'green'}>
          {isBanned ? 'Yes' : 'No'}
        </Tag>
      ),
    },
    {
      title: <span className='font-bold text-[15px]'> Banned Reason</span>,
      dataIndex: 'bannedReason',
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      key: 'bannedReason',
      width:135,
      
      render: renderBannedReason,
    },
    {
      title: <span className='text-[15px] font-bold'>Created On</span>,
      dataIndex: 'createdOn',
      sorter: (a: UserType, b: UserType) => a.id - b.id,
      width: 110,
      key: 'createdOn',
    },
    {
      title: <span className='font-bold text-[15px]'> Updated On</span>,
      dataIndex: 'updatedOn',
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      width:115,
      key: 'updatedOn',
    },
   
    {
      title: <span className='font-bold text-[15px]'>Action</span>,
      key: 'action',
      sorter:(a:UserType,b:UserType)=>a.id-b.id,
      width:80,
      render: renderActions,
    },
  ]);

  const handleCreate = () => {
    setCreateAdminVisible(true);
  };

  const handleSaveEdit = () => {
    // Implement your logic to save the edited user data
    console.log('Save edited user:', editedUser);
    setEditModalVisible(false);
    setEditedUser(null);
  };

  const handleEdit = (record: UserType) => {
    setEditModalVisible(true);
    setEditedUser(record);
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
    <div>
      <h1 className="font-bold text-2xl font-poppins mt-2 ml-4">Admins</h1>

      <div className="flex justify-end mr-4">
        <button
          className="bg-black rounded-md text-white font-poppins shadow-lg font-bold px-2 py-2"
          onClick={handleCreate}
        >
          <PlusOutlined className="text-white" /> Create Admin
        </button>
      </div>


      <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
     
    
        <ReactDragListView.DragColumn {...dragProps}>
        <Table 
      dataSource={adminfilter}
      bordered
      size='small'
      scroll={{ y: 600, x: 'max-content' }} 
      columns={columns}
      
       rowClassName={`text-[15px] highlight-border `}
        pagination={false}  className="shadow-2xl ml-2 mr-3 
          font-poppins  mt-5 bg-white
         text-black custom-table 
          overflow-hidden font-semibold">
       
      </Table>
      </ReactDragListView.DragColumn>

      </div>
<Modal
        visible={selectedBannedReason !== null}
        title="Banned Reason"
        onCancel={() => setSelectedBannedReason(null)}
        footer={null}
      >
        <p>{selectedBannedReason}</p>
      </Modal>
    
      <EditUserModal
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onSave={handleSaveEdit}
        editedUser={editedUser}
      />
      <AdminCreateModal
        visible={createAdminVisible}
        onCancel={() => setCreateAdminVisible(false)}
      />
    </div>
  );
};

export default AdminTable;