import React, { useState } from 'react';
import { Input, Button, message, Alert } from 'antd';
import '../components/Tables/style.css'; // Import custom CSS file for styling

const SupportNumber: React.FC = () => {
  const [supportNumber, setSupportNumber] = useState<string>('');

  const handleSupportNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupportNumber(e.target.value);
  };

  const handleSaveSupportNumber = () => {
    if (!supportNumber.trim()) {
      message.error('Support number cannot be empty');
      return; // Prevent further execution if support number is empty
    }
    console.log('New support number:', supportNumber);
    message.success('Support number updated successfully');
  };
  const handleClearSupportNumber = () => {
    setSupportNumber('');
  };

  return (
    <div className="support-number-container">
      {/* <h1 className="text-2xl font-bold mb-4">Support Number Editor</h1> */}
      <div className="border-t border-gray-200 pt-4">
        <Alert
          description="Here you can update the support number that will be displayed in the app for users to contact support."
          type="info"
          className="mb-4"
        />

        <Alert
          description="Enter the new support number in the input field above and click 'Save' to update it. Click 'Clear' to remove the entered number."
          type="info"
          className="mb-4"
        />
      </div>
      <h1>fgadgad</h1>
      <div className="input-container bg-white  shadow-xl mr-[100px] ml-[100px] h-[300px]">
        <div className="input-wrapper ">
          <input
           className='bg-gray-50 border
            border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
             p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white mt-[90px] w-[300px] ml-[360px] dark:focus:ring-blue-500
             dark:focus:border-blue-500'
            placeholder="Enter support number"
            value={supportNumber}
            onChange={handleSupportNumberChange}
          />
        </div>
        <div className="mr-[140px] w-[240px] mt-[90px] ">
          <button  className='mr-9 bg-black rounded-md  text-white px-6 py-2 font-poppins ' onClick={handleSaveSupportNumber}>
            Save
          </button>
          <button onClick={handleClearSupportNumber} className="bg-black  ml-2 rounded-md  text-white px-6 py-2 font-poppins">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportNumber;
