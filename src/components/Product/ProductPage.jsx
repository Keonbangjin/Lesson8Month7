import React, { useState } from 'react';
import { Table, Button, Form, Input, Modal, Space } from 'antd';

const initialData = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    img: 'https://media.istockphoto.com/id/612619528/photo/hippie-woman-stroll-on-mountain.jpg?s=612x612&w=0&k=20&c=itnF_PSwxpOZGwi6_bEN217prgXIKNNN2UZzIpYLsNk='
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    img: 'https://media.istockphoto.com/id/612619528/photo/hippie-woman-stroll-on-mountain.jpg?s=612x612&w=0&k=20&c=itnF_PSwxpOZGwi6_bEN217prgXIKNNN2UZzIpYLsNk='
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
    img: 'https://media.istockphoto.com/id/612619528/photo/hippie-woman-stroll-on-mountain.jpg?s=612x612&w=0&k=20&c=itnF_PSwxpOZGwi6_bEN217prgXIKNNN2UZzIpYLsNk='
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    img: 'https://media.istockphoto.com/id/612619528/photo/hippie-woman-stroll-on-mountain.jpg?s=612x612&w=0&k=20&c=itnF_PSwxpOZGwi6_bEN217prgXIKNNN2UZzIpYLsNk='
  },
];

const ProductPage = () => {
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const handleAdd = () => {
    setEditingRecord(null);
    setIsEditing(false);
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setData(data.filter(item => item.key !== key));
  };

  const handleOk = (values) => {
    if (isEditing) {
      setData(data.map(item => (item.key === editingRecord.key ? { ...item, ...values } : item)));
    } else {
      const newData = {
        key: data.length ? data[data.length - 1].key + 1 : 0,
        ...values,
      };
      setData([...data, newData]);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (text) => <img src={text} alt="product" style={{ width: 250, height: 200 }} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add Product
      </Button>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={data}
      />
      <Modal
        title={isEditing ? "Edit Product" : "Add Product"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          initialValues={isEditing ? editingRecord : { name: '', age: '', address: '', description: '', img: '' }}
          onFinish={handleOk}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: 'Please input the age!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please input the address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="img"
            label="Image URL"
            rules={[{ required: true, message: 'Please input the image URL!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditing ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductPage;
