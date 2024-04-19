// PaymentMethodData.ts
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export interface PaymentMethodData {
  key: string;
  paymentMethod: string;
  addedBy: string;
  addedOn: Date;
  updatedBy: string;
  updatedOn: Date; 
  isBanned: boolean;
  bannedBy?: string;
  bannedReason?: string;
}

export const dummyData: PaymentMethodData[] = [
  {
    key: '1',
    paymentMethod: 'Credit Card',
    addedBy: 'Admin 1',
    addedOn: new Date('2022-01-15T12:00:00'),
    updatedBy: 'Admin 2',
    updatedOn: new Date('2022-01-16T14:30:00'),
    isBanned: false,
    bannedBy: undefined,
    bannedReason: undefined,
  },
  // Add more dummy data as needed
];
