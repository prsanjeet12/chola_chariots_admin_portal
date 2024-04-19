import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';

interface FilterProps {
  onFilterChange: (filters: { [key: string]: any }) => void;
}

const Filterdata: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [verified, setVerified] = useState<any>(undefined);
  const [bloodGroup, setBloodGroup] = useState('');

  const applyFilter = () => {
    const filters: { [key: string]: any } = {};
    if (firstName.trim() !== '') filters.firstName = firstName.trim().toLowerCase();
    if (lastName.trim() !== '') filters.lastName = lastName.trim().toLowerCase();
    if (verified !== undefined) filters.verified = verified;
    if (bloodGroup.trim() !== '') filters.bloodGroup = bloodGroup.trim().toLowerCase();
    onFilterChange(filters);
  };

  const clearFilters = () => {
    setFirstName('');
    setLastName('');
    setVerified(undefined);
    setBloodGroup('');
    applyFilter(); // Apply filter after clearing all fields
  };

  return (
    <div className='mb-4 pr-5 pt-5'>
      <Input
        placeholder="Search by First Name"
        allowClear
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ width: 200, marginBottom: 20 }}
        className='ml-4 mr-2 px-3 py-2 border rounded-lg shadow-sm font-bold'
      />
      <Input
        placeholder="Search by Last Name"
        allowClear
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
        className='ml-4 mr-2 px-3 py-2 border rounded-lg shadow-sm font-bold'
      />
    <Select
  placeholder="Filter by Verified"
  allowClear
  value={verified}
  onSelect={(value) => setVerified(value)}
  style={{ width: 200, marginBottom: 16 }}
  className='ml-4  h-[40px] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
>
  <Select.Option value={true} className="font-bold">Yes</Select.Option>
  <Select.Option value={false} className="font-bold">No</Select.Option>
</Select>
      <Input
        placeholder="Filter by Blood Group"
        allowClear
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
        className='ml-4 mr-2 px-3 py-2 border rounded-lg shadow-sm font-bold'
      />
<button 
  onClick={applyFilter}  
  className='bg-gray-950 hover:bg-purple-400 text-white px-5 py-2 shadow-xl border-solid rounded-lg mr-4 ml-4 
  transition duration-300 ease-in-out transform hover:scale-105'
>
  Apply Filter
</button>
      <button onClick={clearFilters} className='bg-gray-950 hover:bg-purple-400 text-white px-5 py-2 shadow-xl border-solid rounded-lg mr-4 ml-4 
  transition duration-300 ease-in-out transform hover:scale-105'>Clear Filters</button>
    </div>
  );
};

export default Filterdata;
