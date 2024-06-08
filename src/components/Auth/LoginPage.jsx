import React from 'react';
import { Button, Card, Input } from 'antd';
import './style.css';

const Login = () => {
  return (
    <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card
        title={<h2 style={{ textAlign: 'center', color: '#52c41a', marginBottom: 0 }}>Welcome Back!</h2>}
        bordered={false}
        style={{ width: 300, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
        className="login-card"
      >
        <Input type="email" placeholder="Email" style={{ marginBottom: '20px', borderRadius: '5px' }} />
        <Input.Password placeholder="Password" style={{ marginBottom: '20px', borderRadius: '5px' }} />
        <Button type="primary" block style={{ borderRadius: '5px', background: '#52c41a', borderColor: '#52c41a' }}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
