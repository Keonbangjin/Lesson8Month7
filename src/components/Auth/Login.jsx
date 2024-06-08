import React from 'react';
import { Button, Card, Input } from 'antd';
import  './style.css'

const Login = () => {
    return (
        <div className='card' gap="middle" vertical>
            <Card
                title="Login"
                bordered={false}
                style={{
                width: 300,
                }}
            >
                <Input type='email' placeholder="Email" />
                <Input type='password' placeholder="Password" />
                <Button type="primary">Primary Button</Button>
            </Card>
        </div>
    );
}

export default Login;
