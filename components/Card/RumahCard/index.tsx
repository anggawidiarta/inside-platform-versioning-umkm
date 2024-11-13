import { PushpinOutlined } from '@ant-design/icons';
import { TRumah } from '@lib/entities/Rumah';
import { formatCurrency, toKebabCase } from '@utils/utils';
import { Flex, Row, Space, Typography, Image, Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './RumahCard.module.scss';
interface RumahCardProps {
  items?: TRumah;
}

const RumahCard: React.FC<RumahCardProps> = ({ items }) => {
  return (
    <Link href={`/rumah/${toKebabCase(items?.judulIklanProperti ?? '')}`}>
      <Card
        title={
          <Typography.Text
            ellipsis={true}
            className={styles.rumahCard__textTitle}
          >
            {items?.judulIklanProperti}
          </Typography.Text>
        }
        className={styles.rumahCard}
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 24,
        }}
        styles={{
          header: { borderBottom: 'none', marginBottom: '-35px' },
        }}
        extra={
          items?.pinProperti === 'tidak' ? (
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
          <Flex justify="center" align="center" style={{ marginTop: 10 }}>
            <Image
              src={items?.foto}
              alt="Rumah"
              className={styles.rumahCard__imageStyle}
              wrapperClassName={styles.rumahCard__imageWrapper}
              preview={false}
            />
          </Flex>
          <Space size={[6, 6]} wrap>
            <Space size={[4, 4]}>
              <Image src="/lucide--land-plot.svg" alt="Icon" preview={false} />
              <Typography.Text
                style={{
                  color: 'rgba(144, 163, 191, 1)',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {items?.luasTanahProperti + ' m2'}
              </Typography.Text>
            </Space>
            <Space size={[4, 4]}>
              <Image src="/raft.svg" alt="Icon" preview={false} />
              <Typography.Text
                style={{
                  color: 'rgba(144, 163, 191, 1)',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {items?.fasilitasProperti.map((fasilitas, index) => (
                  <Typography.Text
                    key={index}
                    style={{
                      color: 'rgba(144, 163, 191, 1)',
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {fasilitas + ' '}
                  </Typography.Text>
                ))}
              </Typography.Text>
            </Space>
          </Space>
          <Typography.Text style={{ fontWeight: 700, fontSize: '1rem' }}>
            {formatCurrency(items?.hargaProperti || 0)}
          </Typography.Text>
        </Row>
      </Card>
    </Link>
  );
};

export default RumahCard;
