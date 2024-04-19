// /src/components/DrawerSections/ProviderDetailsSection.tsx
import React from 'react';
import { Descriptions } from 'antd';

export interface DriverData {
  providerName: string;
  addedOn: Date;
  addedBy: string;
  updatedOnDriver: Date;
  updatedBy: string;
  isBanned: boolean;
  bannedBy: string;
  bannedReason: string;
}

interface ProviderDetailsSectionProps {
  driverData: DriverData;
}

const ProviderDetailsSection: React.FC<ProviderDetailsSectionProps> = ({ driverData }) => {
  return (
    <div>
    
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Provider Name">{driverData.providerName}</Descriptions.Item>
        <Descriptions.Item label="Added On">
          {driverData.addedOn.toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Added By">{driverData.addedBy}</Descriptions.Item>
        <Descriptions.Item label="Updated On Driver">
          {driverData.updatedOnDriver.toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Updated By">{driverData.updatedBy}</Descriptions.Item>
        <Descriptions.Item label="Banned">
          {driverData.isBanned ? 'Yes' : 'No'}
        </Descriptions.Item>
        <Descriptions.Item label="Banned By">{driverData.bannedBy}</Descriptions.Item>
        <Descriptions.Item label="Banned Reason">{driverData.bannedReason}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ProviderDetailsSection;
