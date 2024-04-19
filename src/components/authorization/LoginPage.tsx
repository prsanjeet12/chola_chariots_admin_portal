import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




const BASE_URL = 'https://chola-web-app.azurewebsites.net/api';


const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log('Received values:', values);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/admin-login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Login response:', response.data);
      const token = response.data.jwt;
      localStorage.setItem("jwtToken", token);
      console.log(token);
       
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Form
        name="login"
        className="bg-white w-[400px] p-8 rounded-lg shadow-md"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="w-[200px] ml-[60px] bg-black hover:bg-[#5A31A6] text-white font-bold py-2 rounded">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
