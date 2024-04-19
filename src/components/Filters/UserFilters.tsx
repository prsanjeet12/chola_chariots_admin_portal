// UserFilters.tsx

import React from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;

interface UserFiltersProps {
  filterItems: FilterItem[];
  onFilterChange: (key: string, value: any) => void;
}

type FilterItem = {
  key: string;
  label: string;
  type: 'text' | 'select' | 'date';
  options?: { label: string; value: any }[];
};

const UserFilters: React.FC<UserFiltersProps> = ({ filterItems, onFilterChange }) => {
  
  const handleFilterChange = (key: string, e: React.ChangeEvent<HTMLInputElement> | string) => {
    onFilterChange(key, e);
    console.log(e)
  };

  return (
    <div className='flex items-center space-x-4 p-4'>
      {filterItems.map((item) => (
        <div key={item.key}>
          <span>{item.label}:</span>{' '}
          {item.type === 'text' ? (
            <Input
              onChange={(e) => handleFilterChange(item.key, e.target.value)}
              style={{ width: 150 }}
            />
          ) : item.type === 'select' ? (
            <Select
              onChange={(value) => handleFilterChange(item.key, value)}
              style={{ width: 150 }}
            >
              {item.options?.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
          ) : item.type === 'date' ? (
            <Input type='date' onChange={(e) => handleFilterChange(item.key, e.target.value)} />
          
          ) : null}
          
        </div>
      ))}
    </div>
  );
};

export default UserFilters;
