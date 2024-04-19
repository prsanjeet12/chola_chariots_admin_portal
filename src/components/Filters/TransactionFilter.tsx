// TransactionFilter.tsx

import React, { useState } from 'react';
import { Input, DatePicker, Select } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface TransactionFilterProps {
  onFilterChange: (key: keyof Filters, value: string | number) => void;
}

interface Filters {
  dateTime?: string;
  type?: string;
  paymentMethod?: string;
}

const TransactionFilter: React.FC<TransactionFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({});

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    onFilterChange(key, value);
  };

  return (
    <div className="flex space-x-4 mb-4">
      <RangePicker
        onChange={(dates, dateStrings) => handleFilterChange('dateTime', dateStrings.join(','))}
        style={{ width: '100%' }}
      />
      <Select placeholder="Transaction Type" onChange={(value) => handleFilterChange('type', value)} style={{ width: '150px' }}>
        <Option value="payment">Payment</Option>
        <Option value="refund">Refund</Option>
      </Select>
      <Select placeholder="Payment Method" onChange={(value) => handleFilterChange('paymentMethod', value)} style={{ width: '150px' }}>
        <Option value="creditCard">Credit Card</Option>
        <Option value="wallet">Wallet</Option>
      </Select>
    </div>
  );
};

export default TransactionFilter;
