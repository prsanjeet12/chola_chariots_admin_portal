import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DashboardCharts: React.FC = () => {
  const data = [
    { name: 'Jan', users: 1000 },
    { name: 'Feb', users: 1200 },
    { name: 'Mar', users: 800 },
    // Add more data as needed
  ];

  const ridersData = [
    { name: 'Jan', riders: 500 },
    { name: 'Feb', riders: 600 },
    { name: 'Mar', riders: 400 },
    // Add more data as needed
  ];

  const driversData = [
    { name: 'Jan', drivers: 300 },
    { name: 'Feb', drivers: 400 },
    { name: 'Mar', drivers: 200 },
    // Add more data as needed
  ];

  // Calculate cumulative users
  const cumulativeUsersData = data.reduce((acc, entry) => {
    const cumulativeUsers = acc.length > 0 ? acc[acc.length - 1].cumulativeUsers + entry.users : entry.users;
    return [...acc, { ...entry, cumulativeUsers }];
  }, [] as { name: string; users: number; cumulativeUsers: number }[]);

  return (
    <div className="container mx-auto p-8 ">
      {/* Total Users Chart */}
      <div className="rounded shadow-lg p-4 mb-9 bg-white">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cumulativeUsersData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cumulativeUsers" stroke="purple" name="Total Users" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Riders and Drivers Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Riders Chart */}
        <div className="rounded shadow-lg p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Riders Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ridersData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="riders" stroke="purple" name="Riders" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Drivers Chart */}
        <div className="rounded shadow-lg p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Drivers Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={driversData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="drivers" stroke="purple" name="Drivers" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;