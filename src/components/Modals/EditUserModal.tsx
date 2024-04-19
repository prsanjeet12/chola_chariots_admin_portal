import React from 'react';
import { Modal, Checkbox, Input,Switch } from 'antd';

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: number;
  companyCode: string;
  company: string;
  isBanned: boolean;
  bannedReason: string;
};

interface EditUserModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: () => void;
  editedUser: UserType | null;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ visible, onCancel, onSave, editedUser }) => {
  return (
    <Modal
      title="Edit User"
      visible={visible}
      onCancel={onCancel}
      footer={null} // Hide the default footer
    >
      {editedUser && (
        <div className="bg-white rounded p-8">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.username} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.email} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Company Code</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.companyCode} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.company} />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2">Is Banned:</label>
              <Switch defaultChecked={editedUser.isBanned} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Banned Reason</label>
              <Input.TextArea className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.bannedReason} />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[rgb(142,109,233)] px-6 py-2 text-white font-bold rounded focus:outline-none focus:shadow-outline mr-[150px]"
                onClick={onSave}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default EditUserModal;