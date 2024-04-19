// /src/components/DrawerSections/UserDocumentSection.tsx
import React from 'react';
import { Descriptions } from 'antd';
export interface DriverData {
  aadharNo: string;
  aadharFront: string;
  aadharBack: string;
  aadharVerified: boolean;
  aadharVerifiedBy: string;
  panNo: string;
  panImage: string;
  panVerified: boolean;
  panVerifiedBy: string;
  licenseNo: string;
  licenseImage: string;
  licenseVerified: boolean;
  licenseVerifiedBy: string;
  
}

interface UserDocumentSectionProps {
  driverData: DriverData; 
}

const UserDocumentSection: React.FC<UserDocumentSectionProps> = ({ driverData }) => {
  return (
    <div>
     
      <Descriptions bordered column={1} className='font-semibold'>
        <Descriptions.Item label="Aadhar Number" className='font-semibold'>{driverData.aadharNo}</Descriptions.Item>
        <Descriptions.Item label="Aadhar Front">
          <img src={driverData.aadharFront} alt="Aadhar Front" style={{ width: '100%' }} />
        </Descriptions.Item>
        <Descriptions.Item label="Aadhar Back">
          <img src={driverData.aadharBack} alt="Aadhar Back" style={{ width: '100%' }} />
        </Descriptions.Item>
        <Descriptions.Item label="Aadhar Verified">
          {driverData.aadharVerified ? 'Yes' : 'No'}
        </Descriptions.Item>
        <Descriptions.Item label="Aadhar Verified By">{driverData.aadharVerifiedBy}</Descriptions.Item>
        <Descriptions.Item label="PAN Number">{driverData.panNo}</Descriptions.Item>
        <Descriptions.Item label="PAN Image">
          <img src={driverData.panImage} alt="PAN Image" style={{ width: '100%' }} />
        </Descriptions.Item>
        <Descriptions.Item label="PAN Verified">
          {driverData.panVerified ? 'Yes' : 'No'}
        </Descriptions.Item>
        <Descriptions.Item label="PAN Verified By">{driverData.panVerifiedBy}</Descriptions.Item>
        <Descriptions.Item label="License Number">{driverData.licenseNo}</Descriptions.Item>
        <Descriptions.Item label="License Image">
          <img src={driverData.licenseImage} alt="License Image" style={{ width: '100%' }} />
        </Descriptions.Item>
        <Descriptions.Item label="License Verified">
          {driverData.licenseVerified ? 'Yes' : 'No'}
        </Descriptions.Item>
        <Descriptions.Item label="License Verified By">{driverData.licenseVerifiedBy}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default UserDocumentSection;
