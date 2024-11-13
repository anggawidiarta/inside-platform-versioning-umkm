/* eslint-disable @next/next/no-img-element */
import { Col, Drawer, Image, Menu, Row, Input } from 'antd';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useMemo, useState, useContext } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import { UserContext } from '@lib/context/UserContext';
import { useIsMobileScreen } from '@utils/utils';

type HeaderPropsType = {
  isLogged?: boolean;
  title?: string;
  imageMetaUrl?: string;
  isUMKM?: boolean;
  value?: string;
  onChange?: any;
  onSearch?: (value: string) => void;
};

const { Search } = Input;

const menuItems = [
  {
    label: '#LowonganKerja',
    key: 'lokers',
    route: '/lokers',
  },
  {
    label: '#Kendaraan',
    key: 'kendaraan',
    route: '/kendaraan',
  },
  {
    label: '#Rumah',
    key: 'home',
    route: '/rumah',
  },
  {
    label: '#UMKM',
    key: 'umkm',
    route: '/umkm',
  },
  {
    label: '#Laporan Kehilangan',
    key: 'laporan_kehilangan',
    route: '/laporan/kehilangan',
  },
  {
    label: '#Laporan Warga',
    key: 'laporan_warga',
    route: '/laporan/warga',
  },
];

const umkmMenuItems = [
  {
    label: 'UMKM',
    key: 'umkm',
    route: '/',
  },
  {
    label: 'Daftar Mitra',
    key: 'daftar_mitra',
    route:
      'https://wa.me/6285944614192?text=Halo%20Inside%20Lombok%20saya%20ingin%20mendaftar%20sebagai%20mitra%20UMKM',
  },
];
const Header = (props: HeaderPropsType) => {
  const dataUser = useContext(UserContext);
  const isMobile = useIsMobileScreen();
  const isUMKM = props?.isUMKM;
  const { isLogged = true } = props;
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const imageMetaUrl = props?.imageMetaUrl || '/logoinside.png';

  const menuItemMapping = (menuItem: any[], linkColor: string) => {
    return menuItem.map((item) =>
      item.key === '/logout' && isLogged
        ? {
            label: <div style={{ marginTop: '10px' }}>{item.label}</div>,
            key: item.key,
          }
        : {
            label: (
              <Link href={item.route} style={{ color: linkColor }}>
                {item.label}
              </Link>
            ),
            key: item.key,
          }
    );
  };

  const getAssociatedPaths = (): string[] => {
    return [
      menuItems.find((route) => router.pathname.includes(route.key))?.key,
    ] as string[];
  };

  const getAssociatedPathsUMKM = (): string[] => {
    return [
      umkmMenuItems.find((route) => router.pathname.includes(route.key))?.key,
    ] as string[];
  };

  const items = useMemo(() => {
    let iterableMenu = openDrawer ? [...menuItems] : menuItems;
    return menuItemMapping(iterableMenu, 'white');
  }, [openDrawer, isLogged]);

  const itemsMobile = useMemo(() => {
    let iterableMenu = openDrawer ? [...menuItems] : menuItems;
    return menuItemMapping(iterableMenu, 'black');
  }, [openDrawer, isLogged]);

  const itemsUMKM = useMemo(() => {
    let iterableMenu = openDrawer ? [...umkmMenuItems] : umkmMenuItems;
    return menuItemMapping(iterableMenu, 'black');
  }, [openDrawer, isLogged]);

  return (
    <div
      className={classNames(styles.header)}
      style={{ backgroundColor: isUMKM ? 'white' : '#0c4c89' }}
    >
      <div
        className={styles.header__container}
        style={{ padding: isUMKM ? '32px 20px' : '' }}
      >
        <Head>
          <title>
            {props?.title || 'Inside UMKM Lombok - Platform UMKM Terbaik'}
          </title>

          <meta name="robots" content="index, follow" />

          {/* Open Graph meta tags */}
          <meta
            property="og:title"
            content={
              props?.title || 'Inside UMKM Lombok - Platform UMKM Terbaik'
            }
          />
          <meta
            property="og:description"
            content="Inside UMKM Lombok adalah platform aplikasi berbasis website yang berisikan daftar ribuan UMKM di Pulau Lombok. Temukan UMKM terbaik di Lombok. Ribuan UMKM adalah partner terverifikasi Inside Lombok, membantu UMKM Lombok tumbuh dan berkembang."
          />
          <meta property="og:image" content={imageMetaUrl} />
          <meta property="og:url" content={'https://umkm.insidelombok.com'} />
          <meta property="og:type" content="website" />

          {/* Twitter meta tags */}
          <meta
            name="twitter:title"
            content={
              props?.title || 'Inside UMKM Lombok - Platform UMKM Terbaik'
            }
          />
          <meta
            name="twitter:description"
            content="Inside UMKM Lombok adalah platform aplikasi berbasis website yang berisikan daftar ribuan UMKM di Pulau Lombok. Temukan UMKM terbaik di Lombok. Ribuan UMKM adalah partner terverifikasi Inside Lombok, membantu UMKM Lombok tumbuh dan berkembang."
          />
          <meta name="twitter:image" content={imageMetaUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@InsideUMKM" />

          {/* General meta tags */}
          <meta
            name="description"
            content="Inside UMKM Lombok adalah platform aplikasi berbasis website yang berisikan daftar ribuan UMKM di Pulau Lombok. Temukan UMKM terbaik di Lombok. Ribuan UMKM adalah partner terverifikasi Inside Lombok, membantu UMKM Lombok tumbuh dan berkembang."
          />
          <meta
            name="keywords"
            content="Inside UMKM, UMKM Lombok, Lombok UMKM, Platform UMKM, Inside Lombok, Pedagang Lombok, UMKM di Lombok, Daftar UMKM Lombok"
          />
          <meta name="author" content="Inside UMKM Team" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#317EFB" />

          <link rel="canonical" href={'https://umkm.insidelombok.com'} />
          <link rel="icon" href="/logoumkm.jpg" />

          {/* Structured Data (JSON-LD) */}
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              name: 'Inside UMKM Lombok',
              url: 'https://umkm.insidelombok.com',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://umkm.insidelombok.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              description:
                'Inside UMKM Lombok adalah platform aplikasi berbasis website yang berisikan daftar ribuan UMKM di Pulau Lombok. Temukan UMKM terbaik di Lombok. Ribuan UMKM adalah partner terverifikasi Inside Lombok, membantu UMKM Lombok tumbuh dan berkembang.',
              image: imageMetaUrl,
            })}
          </script>
        </Head>

        {isUMKM ? (
          <Row
            justify={'space-between'}
            align={'middle'}
            style={{ width: '100%' }}
            gutter={[0, 8]}
            wrap
          >
            <Col>
              <Image
                src="/inside-umkm.png"
                alt="Inside UMKM Logo"
                className={styles.header__umkm__logo}
                preview={false}
                wrapperClassName={styles.header__umkm__logoWrapper}
              />
            </Col>
            <Col>
              <div className={styles.header__umkm__navigation}>
                {!isMobile && (
                  <Menu
                    mode="horizontal"
                    items={itemsUMKM}
                    selectedKeys={getAssociatedPathsUMKM()}
                    style={{ fontWeight: 700 }}
                  />
                )}
                <Search
                  placeholder="Cari Sesuatu Disini"
                  styles={{
                    affixWrapper: {
                      borderRadius: '24px 0px 0px 24px !important',
                    },
                  }}
                  allowClear
                  value={props.value}
                  onSearch={props.onSearch}
                  onChange={props.onChange}
                  className={styles.header__umkm__navigation__search}
                  style={{ width: 325 }}
                />
              </div>
            </Col>
          </Row>
        ) : (
          <>
            <Col md={24} xs={4}>
              <div>
                <Link className={styles.header__logo} href="/">
                  <Image preview={false} src="/inside_logo.png" alt="logo" />
                </Link>
                <Menu
                  mode="horizontal"
                  items={items}
                  selectedKeys={getAssociatedPaths()}
                  style={{ fontWeight: 500 }}
                />
              </div>
            </Col>
            <Col xs={4} md={0}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <MenuOutlined
                  style={{
                    fontSize: 24,
                    cursor: 'pointer',
                    color: 'rgba(144, 163, 191, 1) !important',
                  }}
                  onClick={() => setOpenDrawer(true)}
                  className="color-primary"
                />
              </Row>
            </Col>
          </>
        )}
      </div>

      {isUMKM ? (
        ''
      ) : (
        <Drawer
          placement="right"
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
        >
          <Menu
            mode="vertical"
            items={itemsMobile}
            selectedKeys={getAssociatedPaths()}
          />
        </Drawer>
      )}
    </div>
  );
};

export default Header;
