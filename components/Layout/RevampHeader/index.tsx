import { Col, Drawer, Image, Menu, Row } from 'antd';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FileTextOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
  ClockCircleOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { useMemo, useState, useContext } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import { UserContext } from '@lib/context/UserContext';

type HeaderPropsType = {
  isLogged?: boolean;
  title?: string;
  imageMetaUrl?: string;
};

const menuItems = [
  {
    label: 'home',
    key: 'home',
    route: '/',
  },
  {
    label: 'challenges',
    key: 'challenges',
    route: '/poc',
  },
  {
    label: 'progress',
    key: 'poc',
    route: '/progress',
  },
  {
    label: 'sign up',
    key: 'signuo',
    route: '/signup',
  },
  {
    label: 'sign in',
    key: 'signin',
    route: '/signin',
  },
];

const navAuthMenu = [
  {
    label: 'Masuk',
    key: 'login',
    route: '/login',
  },
  {
    label: 'Daftar',
    key: 'register',
    route: '/register',
  },
];

const RevampHeader = (props: HeaderPropsType) => {
  const dataUser = useContext(UserContext);
  const { isLogged = true } = props;
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const imageMetaUrl =
    props?.imageMetaUrl ||
    'https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

  const isJuri = false;

  const juryMenus = [
    {
      label: 'PENJURIAN',
      key: '/juri/competitions',
      route: '/juri/competitions',
      icon: <FileTextOutlined />,
    },
  ];

  const submissionReportMenu = [
    {
      label: 'SUBMISSION REPORT',
      key: '/submission-report',
      route: '/submission-report',
      icon: <SnippetsOutlined />,
    },
  ];

  const dropdownMenus = [
    {
      label: 'RIWAYAT PROPOSAL',
      key: '/proposals',
      route: '/proposals',
      icon: <ClockCircleOutlined />,
    },
    {
      label: 'PROFIL',
      key: '/profile',
      route: isJuri ? '/juri/profile' : '/profile',
      icon: <UserOutlined />,
    },
    {
      label: 'KELUAR',
      key: '/login',
      route: '/login',
      icon: <LogoutOutlined />,
    },
  ];

  if (
    dataUser?.juryAccessInfo.isJury ||
    dataUser?.competitionInputterAccessInfo?.isCompetitionInputter
  ) {
    dropdownMenus.unshift(...juryMenus);
  }

  if (
    dataUser?.juryAccessInfo.isJury ||
    dataUser?.competitionViewerAccessInfo?.isCompetitionViewer
  ) {
    dropdownMenus.unshift(...submissionReportMenu);
  }

  const menuItemMapping = (iterableMenuItems: any[]) => {
    return iterableMenuItems.map((iterableMenuItem) => ({
      label: (
        <Link href={iterableMenuItem.route}>{iterableMenuItem.label}</Link>
      ),
      key: iterableMenuItem.key,
    }));
  };

  const getAssociatedPaths = (): string[] => {
    return [
      menuItems.find((route) => router.pathname.includes(route.key))?.key,
    ] as string[];
  };

  const items = useMemo(() => {
    let iterableMenu =
      isLogged && openDrawer
        ? dropdownMenus
        : openDrawer
          ? [...menuItems, ...navAuthMenu]
          : menuItems;
    return menuItemMapping(iterableMenu);
  }, [openDrawer, isLogged]);

  return (
    <div className={classNames(styles.header, 'font-text')}>
      <div className={styles.header__container}>
        <Head>
          <title>{props?.title || ''}</title>
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

          <link rel="icon" href="/favicon.ico" />

          {/* image */}
          <meta property="og:image" content={imageMetaUrl} />
          <meta name="twitter:image" content={imageMetaUrl} />

          {/* preload font futura */}
          <link rel="preload" href="/fonts/FuturaBook.ttf" as="font" />
        </Head>
        <Col md={4}>
          <Link href={isJuri ? '/juri/competitions' : '/'}>
            <Image
              preview={false}
              src="/cida.png"
              alt="logo"
              style={{ maxHeight: 65 }}
            />
          </Link>
        </Col>

        <Col xs={0} md={20}>
          <div className={styles.header__menus}>
            <Menu
              style={{ backgroundColor: 'transparent' }}
              mode="horizontal"
              items={items}
              selectedKeys={getAssociatedPaths()}
            />
          </div>
        </Col>
        <Col xs={4} md={0}>
          <Row justify="center" align="middle" style={{ height: '100%' }}>
            <MenuOutlined
              style={{ fontSize: 24, cursor: 'pointer' }}
              onClick={() => setOpenDrawer(true)}
              className="color-primary"
            />
          </Row>
        </Col>
      </div>
      <Drawer
        placement="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        {isLogged && (
          <Link href="/">
            <Image
              preview={false}
              src="/cida.png"
              alt="logo"
              style={{ maxHeight: 100, marginBottom: 18 }}
            />
          </Link>
        )}
        <Menu
          mode="vertical"
          items={items}
          selectedKeys={getAssociatedPaths()}
        />
      </Drawer>
    </div>
  );
};

export default RevampHeader;
