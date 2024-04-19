import React, { useState } from 'react';
import { Table, Button, Modal, Space } from 'antd';
import Logo from '../../../images/User.png'

interface Rider {
  firstName: string;
  lastName: string;
  dob: string;
  registerDate: string;
  phoneNumber: string;
  picture: string;
  bloodGroup: string;
}

const RidersTable: React.FC = () => {
  const [selectedRider, setSelectedRider] = useState<Rider | null>(null);

  const riders: Rider[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990-01-01',
      registerDate: '2024-02-12',
      phoneNumber: '123-456-7890',
      picture: 'path/to/picture.jpg',
      bloodGroup: 'AB+',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990-01-01',
      registerDate: '2024-02-12',
      phoneNumber: '123-456-7890',
      picture: 'path/to/picture.jpg',
      bloodGroup: 'AB+',
    },
    // Add more rider data as needed
  ];

  const showDetailsModal = (rider: Rider) => {
    setSelectedRider(rider);
  };

  const updateRider = () => {
    // Add your update logic here
    console.log('Update rider:', selectedRider);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      key: 'dob',
    },
    {
      title: 'Register Date',
      dataIndex: 'registerDate',
      key: 'registerDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_text: any, record: Rider) => (
        <Space size="middle">
          <Button onClick={() => showDetailsModal(record)}>View</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="h-[250px]">
      <Table
      
       dataSource={riders}
       pagination={false}
       scroll={{y:250}}
       columns={columns} 
       className='custom-table'
       />

      {selectedRider && (
        <Modal
          title="Rider Details"
          visible={true}
          onCancel={() => setSelectedRider(null)}
          footer={[
            <Button key="update" onClick={updateRider}>Update</Button>,
            <Button key="cancel" onClick={() => setSelectedRider(null)}>Cancel</Button>,
          ]}
        >
       <div className="bg-gray-100 rounded-lg shadow-md p-4">
    <p className="font-bold">First Name: <span className="font-normal">{selectedRider.firstName}</span></p>
    <p className="font-bold">Last Name: <span className="font-normal">{selectedRider.lastName}</span></p>
    <p className="font-bold">Phone Number: <span className="font-normal">{selectedRider.phoneNumber}</span></p>
    <div className="flex items-center">
        <p className="font-bold mr-2">Picture:</p>
        <img src={Logo} alt="Rider Picture" className="w-12 h-12 rounded-full" />
    </div>
    <p className="font-bold">Blood Group: <span className="font-normal">{selectedRider.bloodGroup}</span></p>
    <p className="font-bold">Registered On: <span className="font-normal">{selectedRider.registerDate}</span></p>
</div>
        </Modal>
      )}
    </div>
  );
};

export default RidersTable;