import React from 'react';
import { Form, Input, Button } from 'antd';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const onFinish = (values: ContactFormValues) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div id="contact" className="py-20 bg-[#333333]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <Form
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            className="space-y-6"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Your Name" className="bg-white border-gray-300 text-[#333333]" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input type="email" placeholder="Your Email" className="bg-white border-gray-300 text-[#333333]" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" className="bg-white border-gray-300 text-[#333333]" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-white text-[#333333] hover:bg-gray-200 border-0">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;