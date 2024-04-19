// /src/components/DrawerSections/VehicleDocumentsSection.tsx
import React from 'react';
import { Descriptions } from 'antd';

export interface DriverData {
  vehicleImages?: string[];
  // Include other vehicle-related properties here
  // For example: insuranceProvider, vehicleNo, etc.
}

interface VehicleDocumentsSectionProps {
  driverData: DriverData;
}

const VehicleDocumentsSection: React.FC<VehicleDocumentsSectionProps> = ({ driverData }) => {
  return (
    <div>
     
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Vehicle Images">
          {driverData.vehicleImages?.map((image, index) => (
            <img key={index} src={image} alt={`Vehicle Image ${index + 1}`} style={{ width: '100%' }} />
          )) || 'No vehicle images available'}
        </Descriptions.Item>
        {/* Include other vehicle-related properties here */}
        {/* For example: insuranceProvider, vehicleNo, etc. */}
      </Descriptions>
    </div>
  );
};

export default VehicleDocumentsSection;
