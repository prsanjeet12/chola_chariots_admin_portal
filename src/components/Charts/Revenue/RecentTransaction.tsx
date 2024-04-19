
import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';

// Dummy data for recent rider transactions
interface RiderTransaction {
  id: number;
  amount: number;
  description: string;
  date: string;
  // Add a new property for time
  time: string;
}

const dummyRiderTransactions: RiderTransaction[] = [
  { id: 1, amount: 25.0, description: 'Ride Payment', date: '2022-02-15', time: '10:30 AM' },
  { id: 2, amount: 12.99, description: 'Ride Payment', date: '2022-02-14', time: '09:45 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },
  { id: 3, amount: 30.0, description: 'Ride Payment', date: '2022-02-13', time: '11:15 AM' },


  // Add more dummy rider transactions as needed
];

const RecentRiderTransactions: React.FC = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Rider Transactions</h1>
      <ul>
        {dummyRiderTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-blue-100 rounded-lg p-3'>
              <FaMoneyBill className='text-blue-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${transaction.amount.toFixed(2)}</p>
              <p className='text-gray-400 text-sm'>{transaction.description}</p>
              {/* Displaying date and time */}
              <p className='text-gray-400 text-sm'>{`${transaction.date} - ${transaction.time}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentRiderTransactions;