import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface LoginFormValues {
  email: string;
  password: string;
  remember?: boolean;
}

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onFinish = (values: LoginFormValues) => {
    console.log('Success:', values);
  };

  return (
    <section className="flex h-screen">
      <div className="w-1/2 relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          alt="Innovation Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-5xl font-bold mb-4">WELCOME TO LEVEL NINE TECH</h1>
          <p className="text-xl">We Are A Community, Together To Grow Skill</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
        <a href="https://level9.tech" className="flex items-center mb-8 text-4xl font-extrabold text-gray-800">
          <img className="w-16 h-16 mr-4 rounded-full" src={logo} alt="logo" />
          Level Nine Technology
        </a>

        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Started</h2>
        <Form
          name="login"
          className="space-y-4"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              type="email"
              placeholder="Email"
              className="bg-white border-b-2 border-green-400 text-gray-800 rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              className="bg-white border-b-2 border-green-400 text-gray-800 rounded-lg"
              visibilityToggle={{ visible: passwordVisible, onVisibleChange: togglePasswordVisibility }}
            />
          </Form.Item>

          <Form.Item>
            <Checkbox className="text-gray-600">Remember me</Checkbox>
            <Link className="float-right text-sm font-medium text-green-600 hover:underline" to="#">
              Forgot password?
            </Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-green-500 hover:bg-green-600">
              Sign in
            </Button>
          </Form.Item>

          <p className="text-sm font-light text-gray-600">
            Don't have an account yet? <Link to="/register" className="font-medium text-green-600 hover:underline">Sign up</Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default Login;