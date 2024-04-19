import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Modal } from 'antd'; // assuming you're using Ant Design for modal

interface DailyDriverData {
  date: string;
  drivers: number;
}

const dailyDriverData: DailyDriverData[] = [
  { date: "2024-02-01", drivers: 100 },
  { date: "2024-02-02", drivers: 120 },
  { date: "2024-02-03", drivers: 90 },
  { date: "2024-02-04", drivers: 110 },
  { date: "2024-02-05", drivers: 150 },
];

const DailyDriversChart: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='h-[20]'>
      <AreaChart
       width={600}
       height={250}
        data={dailyDriverData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        onClick={openModal} // Open modal on chart click
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="drivers"
          stroke="#8884d8"
          fill="#8884d8"
          name="Daily Drivers"
        />
      </AreaChart>
      <Modal
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={1000} // Adjust width as needed
        className="chart-modal" // Add custom class for styling
      >
        {/* Render the chart directly inside the modal */}
        <AreaChart
          width={800}
          height={400}
          data={dailyDriverData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="drivers"
            stroke="#8884d8"
            fill="#8884d8"
            name="Daily Drivers"
          />
        </AreaChart>
      </Modal>
    </div>
  );
};

export default DailyDriversChart;