import { Row, Typography } from 'antd';
import React from 'react';

const View404 = () => {
  return (
    <>
      <Row justify="center" className="font-text w-full">
        <Typography.Title
          level={1}
          className="font-header no-margin"
          style={{
            fontSize: 40,
            letterSpacing: 2,
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          Halaman Tidak Ditemukan
        </Typography.Title>
      </Row>

      <Row justify="center" className="font-text w-full">
        <Typography.Paragraph className="text-muted">
          Maaf, Halaman ini tidak ditemukan
        </Typography.Paragraph>
      </Row>
      <Row
        justify="center"
        className="font-text w-full"
        style={{ paddingBottom: '70px', paddingTop: '35px' }}
      >
        <img src="/NotFound.png" alt="Not Found Image" />
      </Row>
    </>
  );
};

export default View404;
