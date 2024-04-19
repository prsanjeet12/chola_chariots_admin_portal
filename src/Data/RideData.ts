export interface RideData {
    key: string;
    riderUser: string;
    driverUser: string;
    vehicleType: string;
    pickupLocation: string;
    dropLocation: string;
    fare: string;
    paymentMethod: string;
    status: number;
    cancelledReason?: string;
    rideRating: number;
    createdOn: Date;
    currentDate: Date;
  }
  
  export const dummyRides: RideData[] = [
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Sec...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Secon...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No drive...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Secon...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Ma...',
      dropLocation: '456 Seco...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Seco...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Ma...',
      dropLocation: '456 Seco...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Secon...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No dri...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },

    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Secon...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 3, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'prsanjeet',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Secon...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 0, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },
    {
      key: '1',
      riderUser: 'John Doe',
      driverUser: 'Jane Doe',
      vehicleType: 'Sedan',
      pickupLocation: '123 Mai...',
      dropLocation: '456 Seco...',
      fare: '$20.00',
      paymentMethod: 'Credit Card',
      status: 4, // Matching
      cancelledReason: 'No driv...',
      rideRating: 4,
      createdOn: new Date('2022-01-15'),
      currentDate: new Date('2024-01-15'),
    },

    // Add more dummy data as needed
  ];
  