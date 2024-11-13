import React from 'react';
import { Row, Col, Typography, Button, Image } from 'antd';

interface BannerCardProps {
  background_color: string;
  title: string;
  paragraph: string;
  image: string;
}

const BannerCard: React.FC<BannerCardProps> = ({
  background_color,
  title,
  paragraph,
  image,
}) => {
  return (
    <div
      style={{
        backgroundColor: background_color,
        padding: '30px',
        width: '100%',
        borderRadius: '10px',
        margin: 'auto',
        marginTop: '20px',
        maxHeight: '200px',
      }}
    >
      <Row>
        <Col md={16}>
          <Typography.Title level={2} style={{ color: 'white' }}>
            {title}
          </Typography.Title>
          <Typography.Paragraph style={{ color: 'white' }}>
            {paragraph}
          </Typography.Paragraph>
          <Button type="primary">Lihat Mobil</Button>
        </Col>
        <Col md={8} xs={0}>
          <Image
            preview={false}
            src={image}
            alt="car_hero"
            style={{ marginTop: '30px', alignItems: 'center' }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default BannerCard;
