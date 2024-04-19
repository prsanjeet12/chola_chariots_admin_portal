import React from 'react';
import RidersChart from './DailyRiderChart'; // Assuming you have a RidersChart component
import RidersTable from './RiderTable';
import DriversChart from './DailyDriverChart'; // Assuming you have a DriversChart component
import DriversTable from './DriversTable';

const UsersChart: React.FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 mt-8">
      <div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Riders Chart</h2>
          <RidersChart />
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Riders Table</h2>
          <RidersTable />
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Drivers Chart</h2>
          <DriversChart />
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Drivers Table</h2>
          <DriversTable />
        </div>
      </div>
    </div>
  );
};

export default UsersChart;