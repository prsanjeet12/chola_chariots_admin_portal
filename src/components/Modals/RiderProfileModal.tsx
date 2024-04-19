// RiderProfileModal.tsx
import React from 'react';
import { Modal } from 'antd';

interface UserProfileModalProps {
  visible: boolean;
  onCancel: () => void;
  user: {
    username: string;
    email: string;
    dob: string;
    bloodGroup: string;
  };
}

const RiderProfileModal: React.FC<UserProfileModalProps> = ({ visible, onCancel, user }) => {
  return (
    <Modal
      visible={visible}
      title="User Profile"
      onCancel={onCancel}
      footer={null}
    >
      <div className="flex flex-col font-poppins">
        <div className='mb-2'><strong>Username:</strong> {user.username || 'JohnDoe'}</div>
        <div className='mb-2'><strong>Email:</strong> {user.email || 'john.doe@example.com'}</div>
        <div className='mb-2'><strong>Date of Birth:</strong> {user.dob || '1990-01-01'}</div>
        <div className='mb-2'><strong>Blood Group:</strong> {user.bloodGroup || 'O+'}</div>
      </div>
    </Modal>
  );
};

export default RiderProfileModal;
