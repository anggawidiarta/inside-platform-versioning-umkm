import { Row, Col, Typography, Tag, Image, Card, Space } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';
import React from 'react';
import { TLoker } from '@lib/entities/Loker';
import {
  capitalize,
  countDown,
  formatCurrency,
  formatDate,
  formatDateToIndonesian,
  toKebabCase,
  useIsMobileScreen,
} from '@utils/utils';
import Link from 'next/link';
import styles from './LokerCard.module.scss';

interface LokerCardProps {
  item: TLoker;
}

const LokerCard: React.FC<LokerCardProps> = (props) => {
  const isMobile = useIsMobileScreen();
  return (
    <Link href={`lokers/${toKebabCase(props.item?.judulIklanLoker)}`}>
      <Card
        className={styles.lokerCard}
        title={
          <Image
            src={props.item?.foto || '/logoinside.png'}
            className={styles.lokerCard__image}
            alt="Logo"
            preview={false}
          />
        }
        extra={props.item?.pinLoker === 'Ya' && <PushpinOutlined />}
      >
        <Space size={[4, 4]} style={{ display: 'flex' }} direction="horizontal">
          <Typography.Text
            ellipsis={{ tooltip: props?.item?.judulIklanLoker }}
            className={styles.lokerCard__title}
          >
            {props?.item?.judulIklanLoker}
          </Typography.Text>
          <Tag color="success" className={styles.lokerCard__tag}>
            {props?.item?.tipePekerjaanLoker}
          </Tag>
        </Space>
        <Row
          style={{
            flexDirection: 'column',
            fontSize: '0.875rem',
          }}
        >
          <Typography.Text className={styles.lokerCard__lokasi} ellipsis={true}>
            {props.item?.pemilikLoker} • {props.item?.lokasiLoker}
          </Typography.Text>
          <Typography.Text className={styles.lokerCard__desc} ellipsis={true}>
            {props.item?.deskripsiLoker}
          </Typography.Text>
          <Space
            direction="horizontal"
            size={'large'}
            className={styles.lokerCard__deadlineWrapper}
          >
            <Typography.Text className={styles.lokerCard__deadline}>
              Deadline:{' '}
              {formatDateToIndonesian(capitalize(props?.item?.updated_at))}
            </Typography.Text>
            <Typography.Text className={styles.lokerCard__gaji}>
              <span
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                }}
              >
                {formatCurrency(props.item?.gajiLoker)}
              </span>
              /Bulan
            </Typography.Text>
          </Space>
        </Row>
      </Card>
    </Link>
  );
};

export default LokerCard;
