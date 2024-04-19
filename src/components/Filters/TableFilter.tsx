// TableFilter.tsx
import React, { useState, useEffect } from 'react';
import { Space, Input, Select, DatePicker } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

interface FilterItem {
  key: string;
  label: string;
  type: 'text' | 'select' | 'date';
  options?: { label: string; value: any }[];
}

interface TableFilterProps {
  filterItems: FilterItem[];
  onFilterChange: (key: string, value: any) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ filterItems, onFilterChange }) => {
  const [filters, setFilters] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    // Reset filters when component mounts
    const initialFilters: { [key: string]: any } = {};
    filterItems.forEach((item) => {
      initialFilters[item.key] = undefined;
    });
    setFilters(initialFilters);
  }, [filterItems]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    onFilterChange(key, value);
  };

  return (
    <div className="p-1 border-b">
      {filterItems.map((item) => (
        <Space key={item.key}>
          {item.type === 'text' && (
            <div className='ml-[70px] '>
             
              <Search
              className=''
                placeholder={`Search by ${item.label}`}
                onSearch={(value) => handleFilterChange(item.key, value)}
              />
            </div>
          )}
          {item.type === 'select' && (
            <div className='ml-[60px]'>
           
              <Select
                placeholder={`Filter by ${item.label}`}
                style={{ width: 120 }}
                onChange={(value) => handleFilterChange(item.key, value)}
              >
                {item.options?.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          )}
          {item.type === 'date' && (
            <div  className='ml-[60px]'>
        
              <DatePicker
                placeholder={`Filter by ${item.label}`}
                onChange={(value) => handleFilterChange(item.key, value)}
              />
            </div>
          )}
        </Space>
      ))}
    </div>
  );
};

export default TableFilter;
