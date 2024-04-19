import React, { useState, useEffect } from 'react';
import { Modal, Switch } from 'antd';

interface EditUserProps {
  visible: boolean;
  onCancel: () => void;
  onSave: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ visible, onCancel, onSave }) => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Reset the state when the modal is opened
    setVerified(false);
  }, [visible]);

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        // Implement your logic to save the edited user data
        console.log('Save edited user');
        onSave(); // Close the modal after saving
      }}
      okText="Save"
      cancelText="Cancel"
    >
      <div>
        <label>User Verified:</label>
        <Switch checked={verified} onChange={(checked) => setVerified(checked)} />
      </div>
      {/* Add more form fields as needed */}
    </Modal>
  );
};

export default EditUser;