import { PushpinOutlined } from '@ant-design/icons';
import { TKendaraan } from '@lib/entities/Kendaraan';
import { formatCurrency, toKebabCase } from '@utils/utils';
import { Flex, Row, Space, Typography, Image, Card } from 'antd';
import Link from 'next/link';
import { format } from 'path';
import React from 'react';
import styles from './MobilCard.module.scss';

interface KendaraanCardProps {
  items?: TKendaraan;
}

const MobilCard: React.FC<KendaraanCardProps> = ({ items }) => {
  return (
    <Link href={`/kendaraan/${toKebabCase(items?.judulIklanKendaraan ?? '')}`}>
      <Card
        title={
          <Typography.Text
            ellipsis={true}
            className={styles.mobilCard__textTitle}
          >
            {items?.judulIklanKendaraan}
          </Typography.Text>
        }
        className={styles.mobilCard}
        styles={{
          header: { borderBottom: 'none', marginBottom: '-35px' },
          title: { fontWeight: 700 },
        }}
        extra={
          items?.pinKendaraan === 'tidak' ? (
            ''
          ) : (
            <Space style={{ marginBottom: 25 }}>
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
      >
        {/* Card Body */}
        <Row style={{ flexDirection: 'column' }}>
          <Typography.Text className={styles.mobilCard__textDesc}>
            {items?.jenisKendaraan}
          </Typography.Text>
          <Flex justify="center" align="center">
            <Image
              src={items?.foto}
              alt="Car Picture"
              className={styles.mobilCard__imageStyle}
              wrapperClassName={styles.mobilCard__imageWrapper}
              preview={false}
            />
          </Flex>
          <Space
            size={[10, 10]}
            className={styles.mobilCard__spaceWrapper}
            wrap
          >
            <Space size={[4, 4]}>
              <Image
                src="/mdi--fuel-pump-outline.svg"
                alt="Icon"
                preview={false}
              />
              <Typography.Text
                style={{
                  color: 'rgba(144, 163, 191, 1)',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {items?.bahanBakarKendaraan}
              </Typography.Text>
            </Space>
            <Space size={[4, 4]}>
              <Image src="/mdi--gear-outline.svg" alt="Icon" preview={false} />
              <Typography.Text
                style={{
                  color: 'rgba(144, 163, 191, 1)',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {items?.transmisiKendaraan}
              </Typography.Text>
            </Space>
            <Space size={[4, 4]}>
              <Image
                src="/mdi--calendar-month.svg"
                alt="Icon"
                preview={false}
              />
              <Typography.Text
                style={{
                  color: 'rgba(144, 163, 191, 1)',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {items?.tahunKendaraan}
              </Typography.Text>
            </Space>
          </Space>
          <Typography.Text
            style={{ fontWeight: 700, fontSize: '1rem', paddingTop: 10 }}
          >
            {formatCurrency(items?.hargaKendaraan ?? 0)}
          </Typography.Text>
        </Row>
      </Card>
    </Link>
  );
};

export default MobilCard;
