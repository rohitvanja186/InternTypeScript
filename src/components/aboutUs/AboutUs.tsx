import React from 'react';
import { Card, Col, Row } from 'antd';
import { CodeOutlined, TeamOutlined, GlobalOutlined } from '@ant-design/icons';

const AboutUs: React.FC = () => {
  return (
    <div id="about" className="py-20 bg-[#F5E6D3]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#3C2A21]">About Us</h2>
        <Row gutter={[16, 16]} className="mb-12">
          <Col xs={24} sm={8}>
            <Card
              hoverable
              className="text-center h-full"
              cover={<CodeOutlined className="text-6xl text-[#5C3D2E] mt-6" />}
            >
              <Card.Meta
                title="High-End IT Solutions"
                description="We deliver best-in-class web solutions for your business success."
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              hoverable
              className="text-center h-full"
              cover={<TeamOutlined className="text-6xl text-[#5C3D2E] mt-6" />}
            >
              <Card.Meta
                title="Experienced Team"
                description="Young engineers and entrepreneurs with international experience."
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              hoverable
              className="text-center h-full"
              cover={<GlobalOutlined className="text-6xl text-[#5C3D2E] mt-6" />}
            >
              <Card.Meta
                title="International Focus"
                description="Serving the international market with innovative software products."
              />
            </Card>
          </Col>
        </Row>
        <p className="text-[#3C2A21] text-center text-lg">
          Level Nine Technology is a Software Development Company based in Nepal. Established in 2019, 
          we are a new startup with a defined vision to serve the international market with software products. 
          Our team of young engineers and entrepreneurs brings international experience to deliver high-end IT solutions 
          to businesses. We offer best-in-class web solutions that help you succeed in your ventures. Our team members 
          have worked with various successful startups and large-scale enterprises to produce top-tier IT solutions 
          for various industries. At Level Nine Technology, we develop and present new ideas, concepts, solutions, 
          and approaches for client success.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;