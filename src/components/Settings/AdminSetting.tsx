// AccountSettings.tsx
import React from 'react';
import { Card, Input, Button, Form, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

// import 'antd/dist/antd.css';

const { Title } = Typography;

const AccountSettings: React.FC = () => {
  const onFinish = (values: any) => {
    // Handle form submission logic here
    console.log('Received values:', values);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 p-4 shadow-lg">
        <Title level={4} className="mb-4">
          Account Settings
        </Title>

        {/* Profile Information */}
        <div className="mb-4 flex items-center space-x-2">
          <img
            src="/path/to/your/profile/image.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">Your Name</p>
            <p className="text-gray-500">@username</p>
          </div>
        </div>

        {/* Email Information */}
        <p className="mb-4 text-gray-600">
          <MailOutlined className="mr-2" />
          your-email@gmail.com
        </p>

        {/* Form for Updating Information */}
        <Form onFinish={onFinish}>
          <Form.Item name="username">
            <Input
              prefix={<UserOutlined />}
              placeholder="New Username"
              className="mb-3"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="New Password"
              className="mb-3"
            />
          </Form.Item>
          <Form.Item name="confirmPassword">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
              className="mb-3"
            />
          </Form.Item>
          <Form.Item name="email">
            <Input
              prefix={<MailOutlined />}
              placeholder="New Email"
              className="mb-3"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AccountSettings;
