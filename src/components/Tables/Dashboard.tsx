import React from 'react';
import { Card } from 'antd';
import { MdDashboard } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';
import { FaUsers as FaUsers6 } from 'react-icons/fa6';
import { MdOutlinePayment } from 'react-icons/md';
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DashboardCharts from '../Charts/DashboradCharts';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <Link to="/user-table">
          <Card
            className="bg-purple-200 text-black rounded-md flex items-center h-[180px] shadow-lg relative hover:bg-gray-100 transition-colors duration-300"
            onClick={() => navigate('/user-table')}
          >
            <FiUsers size={60} className="mx-auto" />
            <div className="absolute inset-y-0 right-6 flex flex-col justify-center">
              <h2 className=" font-bold mb-2 text-2xl">6000</h2>
              <h2 className="text-xl font-bold">Users</h2>
            </div>
          </Card>
        </Link>
        <Link to="/driver-table">
          <Card
            className="bg-purple-200 text-black rounded-md flex items-center h-[180px] shadow-lg relative hover:bg-gray-100 transition-colors duration-300"
            onClick={() => navigate('/driver-table')}
          >
            <FaCar size={60} className="mx-auto" />
            <div className="absolute inset-y-0 right-6 flex flex-col justify-center">
              <h2 className=" font-bold mb-2 text-2xl">2000</h2>
              <h2 className="text-xl font-bold">Drivers</h2>
            </div>
          </Card>
        </Link>
        <Link to="/rider-table">
          <Card
            className="bg-purple-200 text-black rounded-md flex items-center h-[180px] shadow-lg relative hover:bg-gray-100 transition-colors duration-300"
            onClick={() => navigate('/rider-table')}
          >
            <FaUsers6 size={60} className="mx-auto" />
            <div className="absolute inset-y-0 right-6 flex flex-col justify-center">
              <h2 className=" font-bold mb-2 text-2xl">4000</h2>
              <h2 className="text-xl font-bold">Riders</h2>
            </div>
          </Card>
        </Link>
      </div>
      <div>
        {/* <DashboardCharts /> */}
      </div>
    </div>
  );
};

export default Dashboard;