import React from 'react';
import { Button, Card, Input } from 'antd';
import './style.css';

const Register = () => {
  return (
    <div className='card' gap="middle" vertical>
      <Card
        className='cardss'
        title={<h2 style={{ textAlign: 'center', color: '#52c41a', marginBottom: 0 }}>Register</h2>}
        bordered={false}
        style={{
          width: 300,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          background: '#f0f2f5',
        }}
      >
        <Input type='text' placeholder="Name" style={{ marginBottom: '20px', borderRadius: '5px' }} />
        <Input type='email' placeholder="Email" style={{ marginBottom: '20px', borderRadius: '5px' }} />
        <Input.Password placeholder="Password" style={{ marginBottom: '20px', borderRadius: '5px' }} />
        <Button type="primary" block style={{ borderRadius: '5px', background: '#52c41a', borderColor: '#52c41a' }}>Register</Button>
      </Card>
    </div>
  );
}

export default Register;
