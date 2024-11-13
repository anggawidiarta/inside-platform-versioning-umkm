import React from 'react';
import { Card, Image, Space, Tag } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';
import { TLoker } from '@lib/entities/Loker';
import { countDown, formatCurrency } from '@utils/utils';

interface WorkCardProps {
  item: TLoker;
}

const WorkCard: React.FC<WorkCardProps> = ({ item }) => {
  return (
    <Card
      title={<Image src={item?.foto} height={50} alt="Logo" />}
      extra={<PushpinOutlined />}
      style={{ width: '100%' }}
    >
      <Space size={[0, 8]} wrap>
        <p style={{ fontWeight: 'bold' }}>{item?.pemilikLoker}</p>{' '}
        <Tag color="success">{item?.tipePekerjaanLoker}</Tag>
      </Space>
      <p>{item?.lokasiLoker}</p>
      <p className="text-muted">{item?.deskripsiLoker}</p>
      <div style={{ display: 'flex' }}>
        <p className="text-muted">{countDown(item?.created_at)}</p>
        <p
          style={{
            fontWeight: 'bold',
            textAlign: 'right',
            marginLeft: 'auto',
          }}
        >
          {formatCurrency(item?.gajiLoker)}
        </p>
      </div>
    </Card>
  );
};

export default WorkCard;
