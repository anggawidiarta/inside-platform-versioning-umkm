import { PushpinOutlined } from '@ant-design/icons';
import { Card, Row, Col, Tag, Typography, Image, Button } from 'antd';
import React from 'react';

type PromoCardProps = {
  image?: string;
};

const PromoCard: React.FC<PromoCardProps> = (props) => {
  return (
    <Card
      title={
        <Image
          src={props.image}
          height={65}
          preview={false}
          alt="CompanyLogo"
        />
      }
      extra={<PushpinOutlined />}
      styles={{
        header: { borderBottom: 'none', marginBottom: '-20px' },
      }}
    >
      <Row>
        <Col span={24} style={{ display: 'flex', flexDirection: 'column' }}>
          <Tag
            color="success"
            style={{
              textTransform: 'uppercase',
              fontWeight: 600,
              width: 'fit-content',
              fontSize: '0.75rem',
            }}
          >
            PROMO 50% SETIAP PEMBELIAN MAKANAN
          </Tag>
          <Typography.Text style={{ fontSize: '0.75rem' }}>
            KFC Mall Lama Mataram, NTB
          </Typography.Text>
          <Typography.Text style={{ fontSize: '0.75rem' }}>
            Menjual berbagai macam ayam goreng
          </Typography.Text>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '10px',
            }}
          >
            <Button type="primary" style={{ borderRadius: '5px' }}>
              Detail UMKM
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default PromoCard;
