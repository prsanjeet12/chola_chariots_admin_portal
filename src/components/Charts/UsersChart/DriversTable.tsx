import React, { useState } from 'react';
import { Table, Button, Modal, Space } from 'antd';

interface Driver {
  firstName: string;
  lastName: string;
  dob: string;
  registerDate: string;
  phoneNumber: string;
  picture: string;
  licenseNumber: string;
}

const DriversTable: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  const drivers: Driver[] = [
    {
      firstName: 'Michael',
      lastName: 'Smith',
      dob: '1985-05-15',
      registerDate: '2024-02-12',
      phoneNumber: '987-654-3210',
      picture: 'path/to/driver_picture.jpg',
      licenseNumber: 'ABC123456789',
    },
    {
      firstName: 'Michael',
      lastName: 'Smith',
      dob: '1985-05-15',
      registerDate: '2024-02-12',
      phoneNumber: '987-654-3210',
      picture: 'path/to/driver_picture.jpg',
      licenseNumber: 'ABC123456789',
    },
    
    // Add more driver data as needed
  ];

  const showDetailsModal = (driver: Driver) => {
    setSelectedDriver(driver);
  };

  const updateDriver = () => {
    // Add your update logic here
    console.log('Update driver:', selectedDriver);
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
      render: (_text: any, record: Driver) => (
        <Space size="middle">
          <Button onClick={() => showDetailsModal(record)}>View</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="h-[200px]">
      <Table dataSource={drivers}
      scroll={{y:600}}
      className='custom-table'
      pagination={false}
      columns={columns} />

      {selectedDriver && (
        <Modal
          title="Driver Details"
          visible={true}
         
          onCancel={() => setSelectedDriver(null)}
          footer={[
            <Button key="update" onClick={updateDriver}>Update</Button>,
            <Button key="cancel" onClick={() => setSelectedDriver(null)}>Cancel</Button>,
          ]}
        >
          <div>
            <p><strong>First Name:</strong> {selectedDriver.firstName}</p>
            <p><strong>Last Name:</strong> {selectedDriver.lastName}</p>
            <p><strong>Phone Number:</strong> {selectedDriver.phoneNumber}</p>
            <p><strong>Picture:</strong> <img src={selectedDriver.picture} alt="Driver Picture" style={{ width: '100px', height: '100px' }} /></p>
            <p><strong>License Number:</strong> {selectedDriver.licenseNumber}</p>
            <p><strong>Registered On:</strong> {selectedDriver.registerDate}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DriversTable;