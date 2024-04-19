
import React, { useState } from 'react';

interface DynamicFilterProps {
  field: string;
  filterType?: 'text' | 'dropdown'; // Define filterType to determine the type of filter
  dropdownOptions?: string[]; // Provide dropdown options if filterType is 'dropdown'
  onFilter: (field: string, filterValue: string) => void;
}

const RideFilter: React.FC<DynamicFilterProps> = ({ field, filterType = 'text', dropdownOptions = [], onFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleSelectChange = (value: string) => {
    setFilterValue(value);
  };

  const handleSearch = () => {
    onFilter(field, filterValue);
  };

  return (
    <div>
      {filterType === 'text' && (
        <input
          type="text"
          placeholder={`Filter by ${field}`}
          value={filterValue}
          onChange={handleInputChange}
        />
      )}
      {filterType === 'dropdown' && (
        <select value={filterValue} onChange={(e) => handleSelectChange(e.target.value)}>
          <option value="">Select {field}</option>
          {dropdownOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RideFilter;