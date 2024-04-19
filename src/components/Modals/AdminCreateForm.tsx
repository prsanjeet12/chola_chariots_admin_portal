import React, { useState } from 'react';
import { Modal, Input, Button, Switch } from 'antd';
import axios from 'axios';

interface AdminCreateModalProps {
  visible: boolean;
  onCancel: () => void;
}

const AdminCreateModal: React.FC<AdminCreateModalProps> = ({ visible, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('jwtToken');
   console.log(token)
     
      if (!token) {
        console.error('Token not found in localStorage');
        
        return;
      }
  
      const response = await axios.post(
        'https://chola-web-app.azurewebsites.net/api/auth/admin-signup',
        formData,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Signup successful:', response.data);
    
    } catch (error) {
      console.error('Signup error:', error);
    
    } finally {
      onCancel();
    }
  };

  // const res = await fetch('api/auth/signin', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData)
  // });




  return (
    <Modal
      title="Create Admin"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <form className="flex flex-wrap">
        <div className="w-full pr-4 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full pr-4 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <h1></h1>
          <Input
          
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full pr-4 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <Input.Password
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </form>
      <div className="flex justify-end">
        <Button
          type="primary"
          className="mr-[160px] mt-5"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </div>
    </Modal>
  );
};

export default AdminCreateModal;