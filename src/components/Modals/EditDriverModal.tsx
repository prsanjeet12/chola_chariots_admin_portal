import React from 'react';
import { Modal, Input, Switch } from 'antd';

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNo: string;
  verified: boolean;
  companyCode: string;
  dob: Date;
  bloodGroup: string;
};

interface EditDriverModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: () => void;
  editedUser: UserType | null;
}

const EditDriverModal: React.FC<EditDriverModalProps> = ({ visible, onCancel, onSave, editedUser }) => {
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
              <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.firstName} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.lastName} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone No</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.phoneNo} />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2">Verified:</label>
              <Switch defaultChecked={editedUser.verified} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Company Code</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.companyCode} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.dob.toDateString()} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Blood Group</label>
              <Input className="bg-gray-100 border-[2px] py-3" defaultValue={editedUser.bloodGroup} />
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

export default EditDriverModal;
