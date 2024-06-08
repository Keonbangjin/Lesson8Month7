import React from 'react';
import { Button, Card, Input } from 'antd';
import  './style.css'

const Register = () => {
    return (
        <div className='card' gap="middle" vertical>
            <Card
                className='cardss'
                title="Register"
                bordered={false}
                style={{
                width: 300,
                }}
            >
                <Input type='text' placeholder="Name" />
                <Input type='email' placeholder="Email" />
                <Input type='password' placeholder="Password" />
                <Button type="primary">Register</Button>
            </Card>
        </div>
    );
}

export default Register;
