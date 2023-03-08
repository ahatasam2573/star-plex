import { Form } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Login = () => {
    const onFinish = (values) => {
        console.log('success', values);
    }
    return (
        <div className='flex justify-center h-screen items-center bg-primary'>
            <div className='card p-3 w-500 '>
                <h1 className='text-xl flex justify-center'>StarPlex - LOGIN</h1>
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                >

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please Enter Your Email" }]}
                        className='m-2'
                    >
                        <input type="email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please Enter Your Password" }]}
                        className='m-2'
                    >
                        <input type="password" />
                    </Form.Item>
                    <Button fullWidth title='LOGIN' type='submit' />
                    <br />
                    <Link to='/register'><p className='mt-2 ml-3 text-primary block'> {" "} Don't have an account? Register</p></Link>
                </Form>
            </div>
        </div>
    )
}

export default Login;