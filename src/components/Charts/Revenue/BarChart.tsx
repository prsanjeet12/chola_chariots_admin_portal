import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartExample: React.FC = () => {
  const data = [
    { day: 'Mon', Revenue: 18127 },
    { day: 'Tues', Revenue: 22201 },
    { day: 'Wed', Revenue: 19490 },
    { day: 'Thurs', Revenue: 17938 },
    { day: 'Fri', Revenue: 24182 },
    { day: 'Sat', Revenue: 17842 },
    { day: 'Sun', Revenue: 22475 },
  ];

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Revenue" fill="rgb(153, 162, 235)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartExample;