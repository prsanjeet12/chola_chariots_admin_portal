import React, { useState } from 'react';
import { Table, Switch, Button } from 'antd';

interface ApiData {
  name: string;
  statusCode: string;
  createdDate: string;
  updatedDate: string;
  inactive: boolean;
  category: string; 
}

const ApiTable: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData[]>([
    {
      name: 'SignGy API',
      statusCode: '200',
      createdDate: '2024-03-25',
      updatedDate: '2024-03-26',
      inactive: false,
      category: 'Aaddhar',
    },
    {
      name: 'SignGY API',
      statusCode: '404',
      createdDate: '2024-03-22',
      updatedDate: '2024-03-23',
      inactive: true,
      category: 'Pan Card',
    },
    {
      name: 'Google API',
      statusCode: '500',
      createdDate: '2024-03-20',
      updatedDate: '2024-03-21',
      inactive: false,
      category: 'Google Map',
    },
    {
      name: 'Google Api',
      statusCode: '200',
      createdDate: '2024-03-18',
      updatedDate: '2024-03-19',
      inactive: false,
      category: 'Product Information',
    },
    // Add more API data as needed
  ]);

  const handleSwitchChange = (record: ApiData, checked: boolean) => {
    console.log(`Switch toggled for ${record.name}, new value:`, checked);
    const updatedApiData = apiData.map(item => {
      if (item === record) {
        return {
          ...item,
          inactive: !checked 
        };
      }
      return item;
    });
    setApiData(updatedApiData); 
  };


  const handleCheckApi = (record: ApiData) => {
    console.log('Checking API for:', record.name);
 
  };

  const columns = [
    {
      title: <span className='font-bold text-[15px]'>Name</span>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <span className='font-bold text-[15px]'>Category</span>,
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: <span className='font-bold text-[15px]'>Status Code</span>, 
      dataIndex: 'statusCode',
      key: 'statusCode', 
    },
    {
      title: <span className='font-bold text-[15px]'>Created Date</span>,
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: <span className='font-bold text-[15px]'>Updated Date</span>,
      dataIndex: 'updatedDate',
      key: 'updatedDate',
    },
   
    {
      title: <span className='font-bold text-[15px]'>Inactive</span>,
      dataIndex: 'inactive',
      key: 'inactive',
      render: (inactive: boolean, record: ApiData) => (
        <span>
         
          <Switch
            checked={!inactive}
            onChange={(checked) => handleSwitchChange(record, checked)}
          />
        </span>
      ),
    },
    {
      title: <span className='font-bold text-[15px]'>Action</span>,
      key: 'action',
      render: (text: any, record: ApiData) => (
        <button className='bg-black text-white px-4
        font-semibold font-poppins rounded-md
        
        py-2 mt-1' onClick={() => handleCheckApi(record)}>Check API</button>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Table
        dataSource={apiData}
        columns={columns}
        size='small'
        rowClassName={`text-[15px] highlight-border `}
        pagination={false}
        className="ml-2 mr-3 font-poppins mt-5 bg-white text-black custom-table overflow-hidden font-semibold"
      />
    </div>
  );
};

export default ApiTable;