import React, { useState,useRef, useEffect } from 'react';
import { Button, Drawer, Table, Space, Tag, Input , Collapse,Popover,Modal,Select,DatePicker} from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined,SearchOutlined ,FilterOutlined,MoreOutlined, DownOutlined ,CloseOutlined} from '@ant-design/icons';
import { FaFilter, FaSearch } from 'react-icons/fa';
import type { Key } from 'react';
import useInfiniteScroll from '../Hooks/useInfiniteScroll';
// import UserFilters from '../Filters/UserFilters';
import Filterdata from '../Filters/Filterdata';
import ReactDragListView from 'react-drag-listview';
import { TablePaginationConfig, SorterResult, FilterValue, TableCurrentDataSource } from 'antd/lib/table/interface';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import EditRiderModal from '../Modals/EditRiderModal';
import axios from 'axios';



// import {
//   dummyDrivers,
//   // Import other necessary data or components
// } from '../../Data/DummyDriver';


const { confirm } = Modal;

 type RiderType = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNo: string;
  verified: boolean;
  companyCode:string,
    dob: Date;
  profileImage: string;
  bloodGroup: string;
  registeredOn: Date;
  updatedOn: Date;
  // ... other properties
};

type DataIndex = keyof RiderType;
interface MoreOptionsProps {
  id: string | number; 
}


const RiderTable: React.FC = () => {
 


  const [loading, setLoading] = useState(false);
  // const [Drivers, setDrivers] = useState(riderfilter);
  const [visible, setVisible] = useState(false); // State to manage modal visibility
  const [editedUser, setEditedUser] = useState<RiderType | null>(null); 
  // const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [Riders, setRiders] = useState<RiderType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          console.error('Token is not found');
          return;
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('https://chola-web-app.azurewebsites.net/api/admin/get-all-rider?page=1&pageSize=4 ', config);
        console.log(response.data);
        const transformedData = response.data.map((item:any) => ({
          id: item.id,
          firstName: item.user.firstName,
          lastName: item.user.lastName,
          phoneNo: item.user.phoneNo,
          verified: null,
          city: item.user.city,
          companyCode: null,
          dob: item.user.dob,
          bloodGroup: item.user.bloodGroup,
        }));
        console.log(transformedData);
        // Do something with transformedData, such as setting it to state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);


    // Function to handle opening the modal and setting the edited user
    const openEditModal = (user: RiderType) => {
      setVisible(true);
      setEditedUser(user);
    };
  
    // Function to handle closing the modal
    const closeEditModal = () => {
      setVisible(false);
      setEditedUser(null);
    };
  
    // Function to handle saving the edited user data
    const saveEditedUser = () => {
      // Your logic to save the edited user data goes here
      // For simplicity, let's just close the modal for now
      closeEditModal();
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

  
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<RiderType> => ({
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
 


const showDeleteConfirm = (id:string |number) => {
  confirm({
    title: 'Are you sure you want to delete this item?',
    icon: <ExclamationCircleOutlined />,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('Delete:', id); 
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

  // const onFetchMore = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     const newData = riderfilter.slice(Drivers.length, Drivers.length + 10);
  //     setDrivers((prevData) => [...prevData, ...newData]);
  //     setLoading(false);
  //   }, 1000);
  // };

  // const { tableRef } = useInfiniteScroll({
  //   data: Drivers,
  //   onFetchMore,
  //   loading,
  // });

 




 
 
 
  const MoreOptions: React.FC<{ rider: RiderType }> = ({ rider }) => (
    <Space direction="vertical">
      <Button type="text" icon={<EyeOutlined />} onClick={() => console.log('View:', rider.id)}>
        View
      </Button>
      <Button type="text" icon={<EditOutlined />} onClick={() => openEditModal(rider)}>
        Edit
      </Button>
      <Button type="text" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(rider.id)}>
        Delete
      </Button>
    </Space>
  );
  const colums=[
    {
      title: 'Rider Id',
      dataIndex:'id',
      ...getColumnSearchProps('id'),
      key:'id',
      width:70,
      sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      ...getColumnSearchProps('firstName'),
      key: 'firstName',
      sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      ...getColumnSearchProps('lastName'),
      key: 'lastName',
      sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'PhoneNo',
      dataIndex: 'phoneNo',
      ...getColumnSearchProps('phoneNo'),
      key: 'phoneNo',
      sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title:'CompanyCode',
      dataIndex:'companyCode',
      ...getColumnSearchProps('companyCode'),
      key:'companyCode',
      sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'Verified',
      dataIndex: 'verified',
      key: 'verified',
      width: 100,
      sorter: (a: RiderType, b: RiderType) => a.id - b.id,
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value: boolean | Key, record: RiderType) => record.verified === value,
      render: (verified: boolean) => (verified ? 'Yes' : 'No'),
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
      // render: (dob) => new Date(dob).toLocaleDateString(),
      // sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'Profile',
      dataIndex: 'profileImage',
      key: 'profileImage',
      width:100,
      // render: (profileImage) => (
      //   <img src={profileImage} alt="Profile" className="rounded-full w-10 h-10" />
      // ),
    },
    {
      title: 'Blood Group',
      dataIndex: 'bloodGroup',
      key: 'bloodGroup',
      sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'Registered On',
      dataIndex: 'registeredOn',
      key: 'registeredOn',
      // render: (registeredOn) => new Date(registeredOn).toLocaleDateString(),
      // sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    {
      title: 'Updated On',
      dataIndex: 'updatedOn',
      key: 'updatedOn',
      // render: (updatedOn) => new Date(updatedOn).toLocaleDateString(),
      // sorter:(a:RiderType,b:RiderType)=>a.id-b.id,
    },
    // {
    //   title: 'Action',
    //   key: 'Action',
    //   width:90,
    //   render: (_, record) => (
    //     <Popover content={<MoreOptions rider={record} />} title="Actions">
    //       <button className=' text-blacky underline hover:text-purple-800  px-4 py-1 rounded-md'>More</button>
    //     </Popover>
    //   ),
    // },
  ]
  


// const dragProps = {
//   onDragEnd(fromIndex: number, toIndex: number) {
//     const updatedColumns = [...columns];
//     const item = updatedColumns.splice(fromIndex, 1)[0];
//     updatedColumns.splice(toIndex, 0, item);
//     setColumns(updatedColumns);
//   },
//   nodeSelector: 'th',
// };

 
  
  return (
    <div className='w-[1300px] h-[100vh]' >
      <h1 className='text-black text-3xl font-bold ml-4 mt-3'>Riders</h1>
   

      <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
     
      {/* <ReactDragListView.DragColumn {...dragProps}> */}
        <Table<RiderType>
          columns={colums}
          dataSource={Riders}
          rowKey="id"
         
          scroll={{ y: 600 }}
          size='small'
          
          // onChange={handleTableChange}
         
          loading={loading}
          rowClassName={`text-[15px] highlight-border `}
          pagination={false}  className="shadow-2xl ml-2 mr-3 
            font-poppins  mt-5 bg-white
           text-black custom-table 
            overflow-hidden font-semibold"
        />
      {/* </ReactDragListView.DragColumn> */}
      
      </div>
      {editedUser && (
        <EditRiderModal
          visible={visible}
          onCancel={closeEditModal}
          onSave={saveEditedUser}
          editedUser={editedUser}
        />
      )}
    </div>
  );
                }
export default RiderTable;
