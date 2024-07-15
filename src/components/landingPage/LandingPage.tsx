import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import logo from '../../assets/logo.png';
import AboutUs from '../aboutUs/AboutUs';
import ContactUs from '../contactUs/ContactUs';

const { Header, Content, Footer } = Layout;

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout className="min-h-screen bg-[#333333]">
      <Header className="bg-white fixed w-full z-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-[#333333] text-lg">Level Nine Tech</span>
          </div>
          <Menu mode="horizontal" className="border-0">
            <Menu.Item key="home" onClick={() => scrollToSection('home')}>Home</Menu.Item>
            <Menu.Item key="about" onClick={() => scrollToSection('about')}>About</Menu.Item>
            <Menu.Item key="contact" onClick={() => scrollToSection('contact')}>Contact</Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">
                <Button type="primary" className="bg-[#333333] hover:bg-[#555555] border-0 mr-2">
                  Log In
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="/register">
                <Button className="bg-white text-[#333333] hover:bg-[#f0f0f0] border-[#333333]">
                  Register
                </Button>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content className="pt-16">
        <div id="home" className="py-20 bg-[#333333]">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2 text-white">Welcome to Level Nine Tech</h1>
            <h2 className="text-2xl mb-8 text-gray-300">Innovating for Your Success</h2>
            <Button size="large" className="font-bold uppercase tracking-wider bg-white text-[#333333] border-0 hover:bg-gray-200">
              Get Started
            </Button>
          </div>
        </div>

        <AboutUs />
        <ContactUs />
      </Content>

      <Footer className="bg-[#333333] text-white text-center py-4">
        <p>&copy; 2024 Level Nine Technology. All rights reserved.</p>
      </Footer>
    </Layout>
  );
};

export default LandingPage;