import React, { useState,useRef } from 'react';
import { Button, Drawer, Table, Space, Tag, Input , Collapse,Popover,Modal} from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined,SearchOutlined, ExclamationCircleOutlined, DownOutlined ,CloseOutlined} from '@ant-design/icons';


import useInfiniteScroll from '../Hooks/useInfiniteScroll';

import ReactDragListView from 'react-drag-listview';
import { TablePaginationConfig, SorterResult, FilterValue, TableCurrentDataSource } from 'antd/lib/table/interface';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import type { Key } from 'react';

import EditDriverModal from '../Modals/EditDriverModal';



import UserDocumentSection from '../DataSection/UserDocumentSection';
import VehicleDetailsSection from '../DataSection/VehicleDetailsSection';
// import VehicleDocumentsSection from '../DataSection/UserDocumentSection';
import InsuranceProvidersSection from '../DataSection/InsuranceProviderSection';
import VehicleInsuranceSection from '../DataSection/VehicleInsuranceSection';
import VehiclePollutionSection from '../DataSection/VehiclePollutionSection';
import ProviderDetailsSection from '../DataSection/ProviderDetailsSection';

const { Panel } = Collapse;
const { confirm } = Modal;

 type DriverType = {
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
 
};

type DataIndex = keyof DriverType;
interface MoreOptionsProps {
  id: string | number; 
}


const DriverTable: React.FC = () => {
const [driverfilter,setdriverFilter]=useState<any[]>([
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phoneNo: '555-123-4567',
    companyCode:'w2344',
    verified: true,
   
    userType: 1, // User Type: 1 (Driver)
    dob: new Date('1985-05-15'),
    profileImage: 'https://via.placeholder.com/80',
    bloodGroup: 'A+',
    registeredOn: new Date('2024-10-10'),
    updatedOn: new Date('2022-02-05'),
    aadharNo: '1234 5678 9012',
    aadharFront: 'https://via.placeholder.com/200x100',
    aadharBack: 'https://via.placeholder.com/200x100',
    aadharVerified: true,
    aadharVerifiedBy: 'Admin',
    panNo: 'ABCDE1234F',
    panImage: 'https://via.placeholder.com/200x100',
    panVerified: true,
    panVerifiedBy: 'Admin',
    licenseNo: 'DL1234567890123',
    licenseImage: 'https://via.placeholder.com/200x100',
    licenseVerified: true,
    licenseVerifiedBy: 'Admin',
    vehicleType: 'Car',
    fuelType: 'Petrol',
    vehicleNo: 'KA01AB1234',
    vehicleVerified: true,
    vehicleVerifiedBy: 'Admin',
    vehicleImages: [
      'https://via.placeholder.com/200x100',
      'https://via.placeholder.com/200x100',
    ],
    registeredOnVehicle: new Date('2022-02-15'),
    updatedOnVehicle: new Date('2022-02-18'),
    insuranceProvider: 'ABC Insurance',
    insuranceNo: 'INS123456789',
    insuranceExpiryDate: new Date('2023-02-28'),
    insuranceVerified: true,
    insuranceVerifiedBy: 'Admin',
    pollutionExpiryDate: new Date('2023-03-15'),
    pollutionVerified: true,
    pollutionVerifiedBy: 'Admin',
    providerName: 'XYZ Cab Services',
    addedOn: new Date('2022-02-01'),
    addedBy: 'Admin',
    updatedOnDriver: new Date('2022-02-20'),
    updatedBy: 'Admin',
    isBanned: false,
    bannedBy: '',
    bannedReason: '',
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    phoneNo: '555-123-4567',
    companyCode:'w2344',
    verified: true,
    userType: 1, // User Type: 1 (Driver)
    dob: new Date('1985-05-15'),
    profileImage: 'https://via.placeholder.com/80',
    bloodGroup: 'A+',
    registeredOn: new Date('2022-01-10'),
    updatedOn: new Date('2022-02-05'),
    aadharNo: '1234 5678 9012',
    aadharFront: 'https://via.placeholder.com/200x100',
    aadharBack: 'https://via.placeholder.com/200x100',
    aadharVerified: true,
    aadharVerifiedBy: 'Admin',
    panNo: 'ABCDE1234F',
    panImage: 'https://via.placeholder.com/200x100',
    panVerified: true,
    panVerifiedBy: 'Admin',
    licenseNo: 'DL1234567890123',
    licenseImage: 'https://via.placeholder.com/200x100',
    licenseVerified: true,
    licenseVerifiedBy: 'Admin',
    vehicleType: 'Car',
    fuelType: 'Petrol',
    vehicleNo: 'KA01AB1234',
    vehicleVerified: true,
    vehicleVerifiedBy: 'Admin',
    vehicleImages: [
      'https://via.placeholder.com/200x100',
      'https://via.placeholder.com/200x100',
    ],
    registeredOnVehicle: new Date('2022-02-15'),
    updatedOnVehicle: new Date('2022-02-18'),
    insuranceProvider: 'ABC Insurance',
    insuranceNo: 'INS123456789',
    insuranceExpiryDate: new Date('2023-02-28'),
    insuranceVerified: true,
    insuranceVerifiedBy: 'Admin',
    pollutionExpiryDate: new Date('2023-03-15'),
    pollutionVerified: true,
    pollutionVerifiedBy: 'Admin',
    providerName: 'XYZ Cab Services',
    addedOn: new Date('2022-02-01'),
    addedBy: 'Admin',
    updatedOnDriver: new Date('2022-02-20'),
    updatedBy: 'Admin',
    isBanned: false,
    bannedBy: '',
    bannedReason: '',
  },
  {
    "id": 3,
    "firstName": "Alice",
    "lastName": "Smith",
    "phoneNo": "555-987-6543",
    "companyCode": "x4567",
    "verified": true,
    "userType": 1,
    "dob": "1988-09-20T00:00:00.000Z",
    "profileImage": "https://via.placeholder.com/80",
    "bloodGroup": "O-",
    "registeredOn": "2022-03-05T00:00:00.000Z",
    "updatedOn": "2022-04-10T00:00:00.000Z",
    "aadharNo": "9876 5432 1098",
    "aadharFront": "https://via.placeholder.com/200x100",
    "aadharBack": "https://via.placeholder.com/200x100",
    "aadharVerified": true,
    "aadharVerifiedBy": "Admin",
    "panNo": "FGHIJ6789K",
    "panImage": "https://via.placeholder.com/200x100",
    "panVerified": true,
    "panVerifiedBy": "Admin",
    "licenseNo": "DL9876543210987",
    "licenseImage": "https://via.placeholder.com/200x100",
    "licenseVerified": true,
    "licenseVerifiedBy": "Admin",
    "vehicleType": "Motorcycle",
    "fuelType": "Electric",
    "vehicleNo": "MH02CD5678",
    "vehicleVerified": true,
    "vehicleVerifiedBy": "Admin",
    "vehicleImages": [
        "https://via.placeholder.com/200x100",
        "https://via.placeholder.com/200x100"
    ],
    "registeredOnVehicle": "2022-04-15T00:00:00.000Z",
    "updatedOnVehicle": "2022-05-18T00:00:00.000Z",
    "insuranceProvider": "DEF Insurance",
    "insuranceNo": "INS987654321",
    "insuranceExpiryDate": "2023-03-31T00:00:00.000Z",
    "insuranceVerified": true,
    "insuranceVerifiedBy": "Admin",
    "pollutionExpiryDate": "2023-04-15T00:00:00.000Z",
    "pollutionVerified": true,
    "pollutionVerifiedBy": "Admin",
    "providerName": "PQR Ride Services",
    "addedOn": "2022-03-01T00:00:00.000Z",
    "addedBy": "Admin",
    "updatedOnDriver": "2022-05-20T00:00:00.000Z",
    "updatedBy": "Admin",
    "isBanned": false,
    "bannedBy": "",
    "bannedReason": ""
},
{
  "id": 4,
  "firstName": "Emily",
  "lastName": "Johnson",
  "phoneNo": "555-222-3333",
  "companyCode": "y7890",
  "verified": true,
  "userType": 1,
  "dob": "1990-07-12T00:00:00.000Z",
  "profileImage": "https://via.placeholder.com/80",
  "bloodGroup": "B+",
  "registeredOn": "2022-05-20T00:00:00.000Z",
  "updatedOn": "2022-06-25T00:00:00.000Z",
  "aadharNo": "5432 1098 7654",
  "aadharFront": "https://via.placeholder.com/200x100",
  "aadharBack": "https://via.placeholder.com/200x100",
  "aadharVerified": true,
  "aadharVerifiedBy": "Admin",
  "panNo": "LMNOP5678Q",
  "panImage": "https://via.placeholder.com/200x100",
  "panVerified": true,
  "panVerifiedBy": "Admin",
  "licenseNo": "DL5432109876543",
  "licenseImage": "https://via.placeholder.com/200x100",
  "licenseVerified": true,
  "licenseVerifiedBy": "Admin",
  "vehicleType": "Van",
  "fuelType": "Diesel",
  "vehicleNo": "TN03EF1234",
  "vehicleVerified": true,
  "vehicleVerifiedBy": "Admin",
  "vehicleImages": [
      "https://via.placeholder.com/200x100",
      "https://via.placeholder.com/200x100"
  ],
  "registeredOnVehicle": "2022-06-01T00:00:00.000Z",
  "updatedOnVehicle": "2022-07-10T00:00:00.000Z",
  "insuranceProvider": "GHI Insurance",
  "insuranceNo": "INS543210987",
  "insuranceExpiryDate": "2023-05-31T00:00:00.000Z",
  "insuranceVerified": true,
  "insuranceVerifiedBy": "Admin",
  "pollutionExpiryDate": "2023-06-15T00:00:00.000Z",
  "pollutionVerified": true,
  "pollutionVerifiedBy": "Admin",
  "providerName": "LMN Transportation",
  "addedOn": "2022-05-01T00:00:00.000Z",
  "addedBy": "Admin",
  "updatedOnDriver": "2022-07-15T00:00:00.000Z",
  "updatedBy": "Admin",
  "isBanned": false,
  "bannedBy": "",
  "bannedReason": ""
}
])


 
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(false);
  const [Drivers, setDrivers] = useState(driverfilter);
;const [visible, setVisible] = useState(false); // State to manage modal visibility
const [editedUser, setEditedUser] = useState<DriverType | null>(null);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

 



  

  const openEditModal = (user: DriverType) => {
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

  
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DriverType> => ({
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
 

  // const handleFilterChange = (key: string, value: any) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [key]: value,
  //   }));
  // };






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

  const onFetchMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newData = driverfilter.slice(Drivers.length, Drivers.length + 10);
      setDrivers((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000);
  };

  const { tableRef } = useInfiniteScroll({
    data: Drivers,
    onFetchMore,
    loading,
  });

  const showDrawer = (userId: number) => {
    setSelectedUserId(userId);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedUserId(null);
  };





 
 const renderSectionWithSeparator = (section: React.ReactNode, title: string) => (
    <Panel header={title} key={title} className=' font-poppins text-[14px] font-semibold'>
      {section}
    </Panel>
  )
 
const MoreOptions: React.FC<MoreOptionsProps> = ({ id }) => ( // Specify the type of props
<Space direction="vertical">
<Button type="text" icon={<EyeOutlined />} onClick={(event) => showDrawer(Number(id))}>view</Button>

  <Button type="text" icon={<EditOutlined />} onClick={() => console.log('Edit:', id)}>
    Edit
  </Button>
  <Button type="text" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(id)}>
        Delete
      </Button>
</Space>
);
const [columns, setColumns] = useState<ColumnsType<DriverType>>([
  {
  title:<span className='text-[15px] font-bold'>Driver Id</span>,
  dataIndex:'id',
  key:'id',
  width:110,
  ...getColumnSearchProps('id'),
  sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },

  {
    title: <span className='text-[15px] font-bold'>FirstName</span>,
    dataIndex: 'firstName',
    key: 'firstName', 
    width:120,
    ...getColumnSearchProps('firstName'),
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>LastName</span>,
    dataIndex: 'lastName',
    key: 'lastName',
    width:120,
    ...getColumnSearchProps('lastName'),
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>PhoneNo</span>,
    dataIndex: 'phoneNo',
    key: 'phoneNo',  
    width:120,
    ...getColumnSearchProps('phoneNo'),
      sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title:<span className='text-[15px] font-bold'>Company Code</span>,
    dataIndex:'companyCode',
    width:130,
  
    key:'companyCode',

    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>Verified</span>,
    dataIndex: 'verified',
    key: 'verified',
    width:120,
    render: (isVerified: boolean) => (isVerified ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>),
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>DOB</span>,
    dataIndex: 'dob',
    key: 'dob',
    width:120,
    render: (dob) => new Date(dob).toLocaleDateString(),
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>Profile</span>,
    dataIndex: 'profileImage',
    key: 'profileImage',

    width:90,
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
    render: (profileImage) => (
      <img src={profileImage} alt="Profile" className="rounded-full w-10 h-10" />
    ),
  },
  {
    title: <span className='text-[15px] font-bold'>Blood Group</span>,
    dataIndex: 'bloodGroup',
    width:120,
    key: 'bloodGroup',
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>Registered On</span>,
    dataIndex: 'registeredOn',
    key: 'registeredOn',
    width:120,
    render: (registeredOn) => new Date(registeredOn).toLocaleDateString(),
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title: <span className='text-[15px] font-bold'>Updated On</span>,
    dataIndex: 'updatedOn',
    key: 'updatedOn',
    width:120,
    render: (updatedOn) => new Date(updatedOn).toLocaleDateString(),
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
  },
  {
    title:<span className='text-[15px] font-bold'>Action</span>,
    key: 'Action',
    width:120,
    sorter:(a:DriverType,b:DriverType)=>a.id-b.id,
    render: (_, record) => (
      <Popover content={<MoreOptions id={record.id} />} title="Actions">
        <button className=' text-blacky underline hover:text-purple-800  px-4 py-1 rounded-md'>More</button>
      </Popover>
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
    <div className='w-[1300px] h-[100vh]' ref={tableRef}>
      <h1 className='text-black text-3xl font-bold ml-4 mt-3'>Drivers</h1>
      <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
      <ReactDragListView.DragColumn {...dragProps}>
        <Table<DriverType>
          columns={columns}
          dataSource={driverfilter}
          rowKey="id"
          
          scroll={{y:600,x:1100}}
          size='small'
          rowClassName={(record, index) =>
            `text-[15px] highlight-border ${index % 2 === 0 ? 'even-row' : 'odd-row'}`
          }
        
          pagination={false}
          loading={loading}
          className='shadow-2xl custom-table  ml-3 mr-6 font-poppins mt-5 text-[14px] bg-white text-black overflow-hidden sticky top-0 font-semibold'
        />
      </ReactDragListView.DragColumn>
      </div>
      {editedUser && (
        <EditDriverModal
          visible={visible}
          onCancel={closeEditModal}
          onSave={saveEditedUser}
          editedUser={editedUser}
        />
      )}
      <Drawer
        width={720}
        onClose={onClose}
        visible={visible}
        destroyOnClose
        closable={false}
        className="max-w-screen-md font-poppins mx-auto"
      >
        <div className="drawer-header">
          <div style={{ flex: 1 }}>
            <h2 className='pb-5 text-2xl font-poppins font-bold'>User Details</h2>
          </div>
          <Button className="close-button" onClick={onClose}>
            <CloseOutlined className='text-[20px]' />
          </Button>
        </div>
        {selectedUserId !== null && (
          <Collapse
            defaultActiveKey={['UserDocument']}
            bordered={false}
            expandIcon={({ isActive }) => (
              <DownOutlined className={`text-lg ${isActive ? 'transform rotate-180' : ''}`} />
            )}
            className="mt-4"
          >
            {driverfilter.find((driver) => driver.id === selectedUserId) && (
              <>
                {renderSectionWithSeparator(
                  <UserDocumentSection 
                    driverData={driverfilter.find((driver) => driver.id === selectedUserId)!} />,
                  'User Document'
                )}
                {renderSectionWithSeparator(
                  <div className='border-b-2 p-4 shadow-md'>
                    <InsuranceProvidersSection driverData={driverfilter.find((driver) => driver.id === selectedUserId)!} />
                  </div>,
                  'Insurance Providers'
                )}
                {renderSectionWithSeparator(
                  <ProviderDetailsSection driverData={driverfilter.find((driver) => driver.id === selectedUserId)!} />,
                  'Provider Details'
                )}
                {renderSectionWithSeparator(
                  <VehicleDetailsSection driverData={driverfilter.find((driver) => driver.id === selectedUserId)!} />,
                  'Vehicle Details'
                )}
                {renderSectionWithSeparator(
                  <VehicleInsuranceSection driverData={driverfilter.find((driver) => driver.id === selectedUserId)!} />,
                  'Vehicle Insurance'
                )}
                {renderSectionWithSeparator(
                  <VehiclePollutionSection driverData={driverfilter.find((driver) => driver.id === selectedUserId)!} />,
                  'Vehicle Pollution'
                )}
              </>
            )}
          </Collapse>
        )}
      </Drawer>
    </div>
  );
                }
export default DriverTable;
