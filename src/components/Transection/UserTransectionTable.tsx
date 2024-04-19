// src/components/TableComponent.tsx
import React from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';
import { ReactTabulator, ReactTabulatorOptions, ColumnDefinition } from 'react-tabulator';
import { FaEye } from 'react-icons/fa'; // Import the eye icon from React Icons
import { renderToString } from 'react-dom/server';

interface Transaction {
  transactionId: string;
  riderId: string; // Converted from driverId to riderId
  companyCode: string;
  dateTime: string;
  transactionType: string;
  amount: number;
  status: string;
  details: string;
  paymentMethod: string;
}

const data: Transaction[] = [
  {
    transactionId: 'T001',
    riderId: 'R001', // Converted from D001 to R001
    companyCode: '12345',
    dateTime: '2022-01-01T12:30:00',
    transactionType: 'Payment',
    amount: 100.0,
    status: 'Completed',
    details: 'Payment for services',
    paymentMethod: 'Credit Card',
  },
  {
    transactionId: 'T002',
    riderId: 'R002',
    companyCode: '12345',
    dateTime: '2022-01-02T15:45:00',
    transactionType: 'Deduction',
    amount: 20.0,
    status: 'Pending',
    details: 'Deduction for late arrival',
    paymentMethod: 'Wallet',
  },
 
];
const customFormatter = (cell: any, formatterParams: any, onRendered: any) => {

  cell.getElement().style.fontSize = '16px';
  return cell.getValue();
};

const columns: ColumnDefinition[] = [
  { title: 'Transaction ID', field: 'transactionId', formatter: customFormatter},
  { title: 'Rider ID', field: 'riderId', formatter: customFormatter },
  { title: 'Company Code', field: 'companyCode', formatter: customFormatter },
  { title: 'Date and Time', field: 'dateTime', formatter: customFormatter },
  { title: 'Transaction Type', field: 'transactionType', formatter: customFormatter},
  { title: 'Amount', field: 'amount', formatter: customFormatter},
  { title: 'Status', field: 'status',formatter: customFormatter },
  { title: 'Details/Description', field: 'details', formatter: customFormatter },
  { title: 'Payment Method', field: 'paymentMethod',formatter: customFormatter

},
  {
    title: 'Action',
    field: 'action',
    formatter: (cell, formatterParams, onRendered) => renderToString(<FaEye />),
  },
];

const options: ReactTabulatorOptions = {
  layout: 'fitColumns',
  responsiveLayout: 'hide',
  tooltips: true,
  addRowPos: 'top',
  history: true,
  movableColumns: true,
  resizableRows: true,
  initialSort: [
    { column: 'dateTime', dir: 'desc' },
  ],



  
  
};

const TransactionTable: React.FC = () => {
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Transaction Table</h2>
    <div className="shadow-lg rounded-md overflow-hidden">
      <ReactTabulator data={data} columns={columns} options={options} />
    </div>
  </div>
  );
};

export default TransactionTable;
