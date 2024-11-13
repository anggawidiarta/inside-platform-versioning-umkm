import React, { useState } from 'react';
import { Menu, Typography } from 'antd';
import {
  CompassOutlined,
  HomeOutlined,
  MessageOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

const MenuBar = () => {
  const router = useRouter();

  const items = [
    {
      key: 'Beranda',
      label: 'Beranda',
      icon: <HomeOutlined />,
      route: '/',
    },
    {
      key: 'Jelajah',
      label: 'Jelajah',
      icon: <CompassOutlined />,
      route: '/jelajah',
    },
    {
      key: 'Berita',
      label: 'Berita',
      icon: <MessageOutlined />,
      route: 'https://insidelombok.id',
    },
    {
      key: 'Iklan',
      label: 'Buat Iklan',
      icon: <ProfileOutlined />,
      route: '/iklan',
    },
  ];

  // Fungsi untuk menandai item menu yang aktif berdasarkan current route
  const getActiveMenuItem = () => {
    const currentRoute = router.pathname;
    const activeItem = items.find((item) => {
      if (item.route === '/') {
        // Jika route adalah '/', cocokkan dengan route tepat (bukan awalan route)
        return currentRoute === item.route;
      } else {
        // Jika route bukan '/', cocokkan awalan route
        return currentRoute.startsWith(item.route ?? '');
      }
    });
    return activeItem ? [activeItem.key] : []; // Mengembalikan kunci item yang aktif jika ditemukan
  };

  // Fungsi untuk menangani klik pada item menu
  const handleClick = (key: any) => {
    const selectedItem = items.find((item) => item.key === key);
    if (selectedItem && selectedItem.route) {
      router.push(selectedItem.route); // Mengarahkan pengguna ke rute yang sesuai
    }
  };

  return (
    <>
      <Menu
        mode="horizontal"
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          zIndex: 1000,
          padding: '16px',
          margin: 'auto',
          borderTop: 'outset',
          borderBottom: 'none',
          borderColor: '#C6C9DB',
          boxShadow: 'inherit',
        }}
        selectedKeys={getActiveMenuItem()} // Menentukan item menu yang aktif berdasarkan current route
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} onClick={() => handleClick(item.key)}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {item.icon} <br />
                <Typography.Text>{item.label}</Typography.Text>
              </div>
            </Menu.Item>
          ))}
        </div>
      </Menu>
    </>
  );
};

export default MenuBar;
