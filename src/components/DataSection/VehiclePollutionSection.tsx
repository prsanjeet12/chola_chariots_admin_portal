// /src/components/DrawerSections/VehiclePollutionSection.tsx
import React from 'react';
import { Descriptions } from 'antd';

export interface DriverData {
  pollutionExpiryDate: Date;
  pollutionVerified: boolean;
  pollutionVerifiedBy: string;
 
}

interface VehiclePollutionSectionProps {
  driverData: DriverData;
}

const VehiclePollutionSection: React.FC<VehiclePollutionSectionProps> = ({ driverData }) => {
  return (
    <div>
 
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Expiry Date">
          {driverData.pollutionExpiryDate.toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Pollution Verified">
          {driverData.pollutionVerified ? 'Yes' : 'No'}
        </Descriptions.Item>
        <Descriptions.Item label="Pollution Verified By">{driverData.pollutionVerifiedBy}</Descriptions.Item>
        {/* Include other vehicle pollution-related properties here */}
      </Descriptions>
    </div>
  );
};

export default VehiclePollutionSection;
