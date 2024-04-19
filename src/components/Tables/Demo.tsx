import React, { useState } from 'react';
import { Table } from 'antd';
import ReactDragListView from 'react-drag-listview';
import { TablePaginationConfig, SorterResult, FilterValue, TableCurrentDataSource } from 'antd/lib/table/interface';
import './style.css'

interface DataType {
    key: string;
    name: string;
    gender: string;
    age: string;
    address: string;
  }

interface ColumnType {
  title: string;
  dataIndex: string;
  sorter?: (a: DataType, b: DataType) => number;
}

const Demo: React.FC = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: 'Boran',
      gender: 'male',
      age: '12',
      address: 'New York',
    },
    {
        key: '1',
        name: 'Boran',
        gender: 'male',
        age: '12',
        address: 'New York',
      }, {
        key: '1',
        name: 'Boran',
        gender: 'male',
        age: '12',
        address: 'New York',
      }, {
        key: '1',
        name: 'Boran',
        gender: 'male',
        age: '12',
        address: 'New York',
      }, {
        key: '1',
        name: 'Boran',
        gender: 'male',
        age: '12',
        address: 'New York',
      }, {
        key: '1',
        name: 'Boran',
        gender: 'male',
        age: '12',
        address: 'New York',
      }, {
        key: '1',
        name: 'Boran',
        gender: 'male',
        age: '12',
        address: 'New York',
      },
    // ... (other data items)
  ]);

  const [columns, setColumns] = useState<ColumnType[]>([
    { title: 'Key', dataIndex: 'key', sorter: (a, b) => a.key.localeCompare(b.key) },
    { title: 'Name', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: 'Gender', dataIndex: 'gender', sorter: (a, b) => a.gender.localeCompare(b.gender) },
    { title: 'Age', dataIndex: 'age', sorter: (a, b) => parseInt(a.age) - parseInt(b.age) },
    { title: 'Address', dataIndex: 'address', sorter: (a, b) => a.address.localeCompare(b.address) },
  ]);

  const [sortOrders, setSortOrders] = useState<{ [key: string]: 'ascend' | 'descend' | undefined }>({});


  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const updatedColumns = [...columns];
      const item = updatedColumns.splice(fromIndex, 1)[0];
      updatedColumns.splice(toIndex, 0, item);
      setColumns(updatedColumns);
    },
    nodeSelector: 'th',
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[],
    extra: TableCurrentDataSource<DataType>
  ) => {
    if (Array.isArray(sorter)) {
      // Handle multiple column sorting if needed
    } else {
      // Handle single column sorting
      const { field, order } = sorter as SorterResult<DataType>;
    //   if (field) {
    //     setSortOrders({ ...sortOrders, [field as string]: order });
    //   }
    }
  };
  
  return (
    <div style={{ margin: 20 }}>
      <h2>Table column with dragging</h2>
      <ReactDragListView.DragColumn {...dragProps}>
        <Table<DataType>
          columns={columns.map((column) => ({
            ...column,
            sortOrder: sortOrders[column.dataIndex],
          }))}
          pagination={false}
          dataSource={data}
          bordered
          rowClassName={`highlight-border`}
          onChange={handleTableChange}
        />
      </ReactDragListView.DragColumn>
    </div>
  );
};

export default Demo;
