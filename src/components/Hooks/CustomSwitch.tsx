import React from 'react';

interface CustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className={`relative w-10 h-4 transition duration-200 ease-in-out ${checked ? 'bg-green-500' : 'bg-red-500'}`}>
        <div
          className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
            checked ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></div>
      </div>
      <input type="checkbox" className="hidden" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
};

export default CustomSwitch;