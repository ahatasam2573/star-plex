import React from 'react'
import { Form, message } from 'antd';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { RegisterUser } from '../../apiCalls/users';

const Register = () => {
    const onFinish = async (values) => {
        try {
            const response = await RegisterUser(values);
            if (response.success) {
                message.success(response.message)
            }
            else {
                message.error(response.message)
            }
        } catch (error) {
            message.error(error.message)
        }
    }
    return (
        <div className='flex justify-center h-screen items-center bg-primary'>
            <div className='card p-3 w-500 '>
                <h1 className='text-xl flex justify-center'>StarPlex - Register</h1>
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please Enter Your Name" }]}
                        className='m-2'
                    >
                        <input type="text" />
                    </Form.Item>

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
                    <Button fullWidth title='REGISTER' type='submit' />
                    <br />
                    <Link to='/login'><p className='mt-2 ml-3 text-primary block'> Already have an account? Login</p></Link>
                </Form>
            </div>
        </div>
    )
}

export default Register;