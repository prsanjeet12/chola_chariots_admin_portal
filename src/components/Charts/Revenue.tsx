import React from 'react';
import { Card, Row, Col } from 'antd';
import { FaCar, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const Revenue = () => {
  const totalRides = 1000;
  const totalRevenue = 50000;
  const netRevenue = 40000;

  const revenueAnalyticsData = [
    { month: 'Jan', revenue: 5000 },
    { month: 'Feb', revenue: 8000 },
    { month: 'Mar', revenue: 12000 },
    // Add more data as needed
  ];

  const recentRevenuesData = [
    { date: '2022-04-01', revenue: 1000 },
    { date: '2022-04-02', revenue: 1500 },
    { date: '2022-04-03', revenue: 2000 },
    // Add more data as needed
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Total Rides" className="text-center">
            <FaCar size={50} />
            <p>Total Rides: {totalRides}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Revenue" className="text-center">
            <FaDollarSign size={50} />
            <p>Total Revenue: ${totalRevenue}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Net Revenue" className="text-center">
            <FaDollarSign size={50} />
            <p>Net Revenue: ${netRevenue}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Rides & Net Revenue" className="text-center">
            <FaCar size={30} />
            <FaDollarSign size={30} />
            <p>Total Rides: {totalRides}</p>
            <p>Net Revenue: ${netRevenue}</p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} className="mt-4">
        <Col span={12}>
          <Card title="Chart - Revenue Analytics">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueAnalyticsData}>
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Recent Revenues">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={recentRevenuesData}>
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Revenue;