// /src/components/DrawerSections/VehicleDetailsSection.tsx
import React from 'react';
import { Descriptions } from 'antd';

export interface DriverData {
  vehicleType: string;
  fuelType: string;
  vehicleNo: string;
  vehicleVerified: boolean;
  vehicleVerifiedBy: string;
  registeredOnVehicle?: Date;
  updatedOnVehicle?: Date;

}

interface VehicleDetailsSectionProps {
  driverData: DriverData;
}

const VehicleDetailsSection: React.FC<VehicleDetailsSectionProps> = ({ driverData }) => {
  return (
    <div>
     
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Vehicle Type">{driverData.vehicleType}</Descriptions.Item>
        <Descriptions.Item label="Fuel Type">{driverData.fuelType}</Descriptions.Item>
        <Descriptions.Item label="Vehicle Number">{driverData.vehicleNo}</Descriptions.Item>
        <Descriptions.Item label="Vehicle Verified">
          {driverData.vehicleVerified ? 'Yes' : 'No'}
        </Descriptions.Item>
        <Descriptions.Item label="Vehicle Verified By">{driverData.vehicleVerifiedBy}</Descriptions.Item>
        <Descriptions.Item label="Registered On Vehicle">
          {driverData.registeredOnVehicle?.toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Updated On Vehicle">
          {driverData.updatedOnVehicle?.toLocaleDateString()}
        </Descriptions.Item>
      
      </Descriptions>
    </div>
  );
};

export default VehicleDetailsSection;
