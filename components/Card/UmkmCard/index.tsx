import { PushpinOutlined } from '@ant-design/icons';
import { TUmkmItem } from '@lib/entities/Umkm';
import { toKebabCase } from '@utils/utils';
import { Card, Col, Row, Space, Image, Typography, Divider, Flex } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './UmkmCard.module.scss';

interface UmkmProps {
  items?: TUmkmItem;
}

const UmkmCard: React.FC<UmkmProps> = ({ items }) => {
  return (
    <Link href={`${toKebabCase(items?.namaToko ?? '')}`}>
      <Card
        // Title Wrapper
        title={
          <>
            <Image
              src={`${items?.fotoToko}`}
              alt="UMKM Logo"
              preview={false}
              wrapperClassName={styles.umkmCard__title__imageWrapper}
              className={styles.umkmCard__title__imageStyle}
            />
            <Flex vertical style={{ width: '100%' }}>
              <Typography.Text
                className={styles.umkmCard__title__textToko}
                ellipsis={{ tooltip: items?.namaToko }}
              >
                {items?.namaToko}
              </Typography.Text>
              <Typography.Text className={styles.umkmCard__title__textKategori}>
                {items?.kategoriToko}
              </Typography.Text>
              <Space
                size={[4, 4]}
                style={{ marginTop: 12 }}
                styles={{ item: { display: 'flex' } }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#31363F"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  ></path>
                </svg>
                <Typography.Text
                  className={styles.umkmCard__title__textAlamat}
                  ellipsis={{ tooltip: items?.alamatToko }}
                >
                  {items?.alamatToko}
                </Typography.Text>
              </Space>
            </Flex>
          </>
        }
        extra={
          items?.pinToko === 'Ya' && (
            <Space style={{ marginBottom: 50 }}>
              <Typography.Text
                style={{
                  fontSize: 12,
                  color: 'rgba(144, 163, 191, 0.5)',
                }}
              >
                Promosi
              </Typography.Text>
              <PushpinOutlined
                style={{
                  fontSize: 12,
                  color: 'rgba(144, 163, 191, 0.5)',
                }}
              />
            </Space>
          )
        }
        classNames={{
          header: styles.umkmCard__header,
          title: styles.umkmCard__title,
          body: styles.umkmCard__body,
        }}
        className={styles.umkmCard}
        // style={{ boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)' }}
      >
        <Row gutter={[16, 8]} justify={'start'}>
          {items?.produkToko?.slice(0, 3).map((item, i) => (
            <Col span={8} key={i}>
              <div className={styles.umkmCard__cardBody}>
                <Image
                  alt="Image Card"
                  src={item.file || ''}
                  preview={false}
                  className={styles.umkmCard__cardBody__imageStyle}
                  wrapperClassName={styles.umkmCard__cardBody__imageWrapper}
                />
                <Divider className={styles.umkmCard__cardBody__divider} />
                <Typography.Text
                  ellipsis={{ tooltip: item.namaProduk || 'Produk ' + (i + 1) }}
                  className={styles.umkmCard__cardBody__label}
                >
                  {item.namaProduk || 'Produk ' + (i + 1)}
                </Typography.Text>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </Link>
  );
};

export default UmkmCard;
