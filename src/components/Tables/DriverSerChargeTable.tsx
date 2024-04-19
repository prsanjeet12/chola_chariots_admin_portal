import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, DatePicker,Switch  } from 'antd';

const { Option } = Select;

const SurchargeCategoryTable: React.FC = () => {
  // State for modal visibility and form data
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryType: 0,
    calculationType: 0,
    description: '',
    isActive: true,
    effectiveStartDate: null,
    effectiveEndDate: null,
  });
  const data = [
    {
      surchargeCategoryId: 'TAX_01',
      categoryName: 'GST TAX',
      categoryType: 'Central Govt. Tax',
      calculationType: 'NULL',
      description: 'This tax is forever.',
      isActive: true,
      effectiveStartDate: new Date(),
      effectiveEndDate: null,
    },
  ];

  // Column definitions
  const columns = [
    {
      title: 'Surcharge Category ID',
      dataIndex: 'surchargeCategoryId',
      key: 'surchargeCategoryId',
    },
    {
      title: 'Category Name',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Category Type',
      dataIndex: 'categoryType',
      key: 'categoryType',
    },
    {
      title: 'Calculation Type',
      dataIndex: 'calculationType',
      key: 'calculationType',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Is Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: boolean) => (isActive ? 'True' : 'False'),
    },
    {
      title: 'Effective Start Date',
      dataIndex: 'effectiveStartDate',
      key: 'effectiveStartDate',
      render: (date: Date) => date.toLocaleDateString(),
    },
    {
      title: 'Effective End Date',
      dataIndex: 'effectiveEndDate',
      key: 'effectiveEndDate',
      render: (date: Date | null) => (date ? date.toLocaleDateString() : 'NULL'),
    },
  ];

  // Modal form submit handler
  const handleFormSubmit = () => {
    // Implement form submission logic here
    console.log('Form submitted with data:', formData);
    // Close modal after submission
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)}>Add New Category</Button>
      <Table
        columns={columns}
        dataSource={data}
        // Add any other table props as needed
      />
      <Modal
        title="Add New Category"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleFormSubmit}>
            Submit
          </Button>,
        ]}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleFormSubmit}
          autoComplete="off"
        >
          <Form.Item label="Category Name" name="categoryName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Category Type" name="categoryType" rules={[{ required: true }]}>
            <Select>
              <Option value={0}>Percentage</Option>
              <Option value={1}>Fixed Number(ride count)</Option>
              <Option value={2}>Currency(Amount)</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Calculation Type" name="calculationType" rules={[{ required: true }]}>
            <Select>
              <Option value={0}>Plus</Option>
              <Option value={1}>Minus</Option>
              <Option value={2}>Multiply</Option>
              <Option value={3}>Divide</Option>
              <Option value={4}>Average</Option>
              <Option value={5}>Modulus</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Is Active" name="isActive" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Effective Start Date" name="effectiveStartDate">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Effective End Date" name="effectiveEndDate">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SurchargeCategoryTable;
