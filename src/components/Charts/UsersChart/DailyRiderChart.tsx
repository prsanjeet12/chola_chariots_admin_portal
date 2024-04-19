import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Modal } from 'antd'; // assuming you're using Ant Design for modal

interface DailyRiderData {
  date: string;
  riders: number;
}

const dailyRiderData: DailyRiderData[] = [
  { date: "2024-02-01", riders: 80 },
  { date: "2024-02-02", riders: 90 },
  { date: "2024-02-03", riders: 70 },
  { date: "2024-02-04", riders: 100 },
  { date: "2024-02-05", riders: 120 },
  { date: "2024-02-06", riders: 110 },
  { date: "2024-02-07", riders: 85 },
  { date: "2024-02-08", riders: 95 },
  { date: "2024-02-09", riders: 75 },
  { date: "2024-02-10", riders: 105 },
  { date: "2024-02-11", riders: 115 },
  { date: "2024-02-12", riders: 88 },
  { date: "2024-02-13", riders: 92 },
  { date: "2024-02-14", riders: 82 },
  { date: "2024-02-15", riders: 98 },
  { date: "2024-02-16", riders: 68 },
  { date: "2024-02-17", riders: 78 },
  { date: "2024-02-18", riders: 96 },
  { date: "2024-02-19", riders: 72 },
  { date: "2024-02-20", riders: 102 },
];

const DailyRidersChart: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='h-[20]'>
      <LineChart
        width={600}
        height={250}
        data={dailyRiderData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        onClick={openModal} // Open modal on chart click
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone" // Change interpolation type to monotone
          dataKey="riders"
          stroke="#8884d8"
          fill="#8884d8"// Change color for riders
          name="Daily Riders" // Change name for riders
        />
      </LineChart>
      <Modal
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={1000} // Adjust width as needed
        className="chart-modal" // Add custom class for styling
      >
        {/* Render the chart directly inside the modal */}
        <LineChart
          width={800}
          height={400}
          data={dailyRiderData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone" // Change interpolation type to monotone
            dataKey="riders"
            stroke="#8884d8"
            fill="#8884d8" // Change color for riders
            name="Daily Riders" // Change name for riders
          />
        </LineChart>
      </Modal>
    </div>
  );
};

export default DailyRidersChart;