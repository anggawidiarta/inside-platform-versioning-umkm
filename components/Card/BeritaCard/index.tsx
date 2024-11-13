import { Button, Card, Col, Row, Space, Typography, Image } from 'antd';
import { NextPage } from 'next';
import React from 'react';
import styles from './BeritaCard.module.scss';

type BeritaCardProps = {
  isMain?: boolean;
  judul?: string;
};

const BeritaCard = ({
  isMain,
  judul = 'Anies Baswedan Tak menyangka Hasil Quick Qount Menang Telak.',
}: BeritaCardProps) => {
  return (
    <Card styles={{ body: { padding: 15 } }}>
      <Row gutter={[10, 10]} align={{ md: 'stretch', lg: 'stretch' }}>
        <Col xs={10} md={8} lg={isMain ? 6 : 10}>
          <Image
            alt="berita"
            src="/berita_contoh.png"
            className={styles.beritaCard__imageStyle}
            wrapperClassName={styles.beritaCard__imageWrapper}
            preview={false}
          />
        </Col>
        <Col xs={14} md={16} lg={isMain ? 18 : 14}>
          <Typography.Text
            className={
              isMain
                ? styles.beritaCard__title
                : styles.beritaCard__titleNotMain
            }
            ellipsis={true}
          >
            {judul}
          </Typography.Text>
          <Space
            size={isMain ? [12, 12] : [8, 8]}
            style={{ width: '100%', marginTop: '10px' }}
            wrap
          >
            <Typography.Text
              className={
                isMain
                  ? styles.beritaCard__subtitleIsMain
                  : styles.beritaCard__subtitleNotMain
              }
            >
              Berita Kompas
            </Typography.Text>
            <Typography.Text
              className={
                isMain
                  ? styles.beritaCard__subtitleIsMain
                  : styles.beritaCard__subtitleNotMain
              }
            >
              2/24/2024
            </Typography.Text>
            <Typography.Text
              className={
                isMain
                  ? styles.beritaCard__subtitleIsMain
                  : styles.beritaCard__subtitleNotMain
              }
            >
              4 min Baca
            </Typography.Text>
          </Space>
          {isMain ? null : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '20px',
              }}
            >
              <Button
                type="primary"
                onClick={() => {}}
                style={{ borderRadius: 5 }}
              >
                Selengkapnya
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default BeritaCard;
