import { MainLayout } from '@components/Layout';
import { Row, Col, Typography, Image } from 'antd';
import type { NextPage } from 'next';
import styles from './Home.module.scss';
import Head from 'next/head';
import { useIsMobileScreen } from '@utils/utils';

const Maintenance: NextPage = () => {
  const isMobile = useIsMobileScreen();
  const imageMetaUrl =
    'https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  return (
    <MainLayout
      title="Not Found"
      hideHeader={isMobile && true}
      hideFooter={isMobile && true}
      hideMenuBar={isMobile && true}
      style={{ background: isMobile ? 'white' : '' }}
    >
      <Head>
        <title>Not Found</title>
        {/* remove if in production */}
        {process.env.NEXT_PUBLIC_SERVER_TYPE !== 'production' && (
          <meta name="robots" content="noindex,nofollow" />
        )}
        {/* TODO: change image when API ready */}
        <meta property="og:title" content="Inside Lombok" />
        <meta name="twitter:title" content="Inside Lombok" />
        {/* description */}
        <meta
          name="description"
          content="Inside UMKM adalah platform aplikasi berbasis website yang berisikan daftar ribuan umkm yang ada di Pulau Lombok dan terverifikasi sebagai partner Inside Lombok."
        />
        <meta
          property="og:description"
          content="Inside UMKM adalah platform aplikasi berbasis website yang berisikan daftar ribuan umkm yang ada di Pulau Lombok dan terverifikasi sebagai partner Inside Lombok."
        />
        <meta
          name="twitter:description"
          content="Inside UMKM adalah platform aplikasi berbasis website yang berisikan daftar ribuan umkm yang ada di Pulau Lombok dan terverifikasi sebagai partner Inside Lombok."
        />
        <link rel="icon" href="/inside_vector.png" />
        {/* image */}
        <meta property="og:image" content={imageMetaUrl} />
        <meta name="twitter:image" content={imageMetaUrl} />
      </Head>
      <Row align="middle" justify="center">
        <Col
          md={24}
          style={{
            width: '1440px',
            height: isMobile ? '100vh' : '852px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px 64px 60px 64px',
          }}
        >
          <Image
            src="/404.png"
            preview={false}
            alt="Error 404 Not Found"
            width={'217px'}
            height={'245px'}
          />
          <div
            style={{
              marginTop: '44px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {' '}
            <Typography.Text
              style={{
                textAlign: 'center',
                fontSize: isMobile ? '1rem' : '1.5rem',
                fontWeight: '700',
                fontFamily: 'sans-serif',
              }}
            >
              Tidak Ada Hasil Yang Ditemukan
            </Typography.Text>
            <Typography.Text
              style={{
                maxWidth: '100%',
                textAlign: 'center',
                width: isMobile ? '100%' : '438px',
                marginTop: '20px',
                fontSize: isMobile ? '0.725rem' : '1.25rem',
                fontFamily: 'sans-serif',
                fontWeight: '400',
                color: 'rgba(82, 75, 107, 1)',
              }}
            >
              Pencarian tidak dapat ditemukan, harap periksa ejaan atau tulis
              kata lain.
            </Typography.Text>
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Maintenance;
