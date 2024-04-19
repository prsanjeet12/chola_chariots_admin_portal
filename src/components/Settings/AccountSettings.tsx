// AccountSettings.tsx
import React from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AccountSettings: React.FC = () => {
  const onFinish = (values: any) => {
    // Handle form submission logic here
    console.log('Received values:', values);
  };

  return (
    <div className="w-full flex flex-col items-center mt-10 gap-8">
      <h1 className="text-3xl font-bold">Account Settings</h1>
      <div className="flex w-full max-w-2xl space-x-8">
        {/* Left Card (40%) */}
        <div className="w-2/5">
          <Card className="w-full h-full p-8 border border-gray-300 rounded-lg shadow-md">
            {/* Left Card Content */}
          </Card>
        </div>

        {/* Right Card (60%) */}
        <div className="w-[1400px] ">
          <Card className="w-full p-8 border
           border-gray-300 rounded-lg shadow-md ml-[190px]">
            <Title level={4} className="mb-6">
              Update Information
            </Title>
            <Form onFinish={onFinish}>
              <Form.Item name="username" label="Username">
                <Input prefix={<UserOutlined />} placeholder="New Username" className='ml-5' />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input prefix={<MailOutlined />} placeholder="New Email"  className='ml-5 w-10'/>
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password prefix={<LockOutlined />} placeholder="New Password" className='ml-5'/>
              </Form.Item>
              <Form.Item name="confirmPassword" label="Confirm Password">
                <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password"  className='ml-5'/>
              </Form.Item>
              <Form.Item>
                <button  className="bg-black text-white 
                px-8 py-2 rounded-md   ml-[100px]
                ">
                  Update
                </button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
