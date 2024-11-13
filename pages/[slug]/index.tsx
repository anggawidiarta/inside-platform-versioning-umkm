/* eslint-disable @next/next/no-img-element */
import {
  Col,
  Layout,
  Row,
  Image,
  Typography,
  Space,
  Button,
  Flex,
  Spin,
} from 'antd';
const { Content } = Layout;
import React, { useState } from 'react';
import styles from './DetailUmkm.module.scss';
import classNames from 'classnames';
import { useFetchUmkmDetail } from '@lib/hooks/Umkm';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import { useIsMobileScreen } from '@utils/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ViewContentQuill } from '@components/View/ViewContentQuill';
import { InstagramEmbed } from 'react-social-media-embed';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const DetailUmkm: NextPage = () => {
  const isMobile = useIsMobileScreen();
  const router = useRouter();
  const { data, isLoading } = useFetchUmkmDetail(router.query.slug as string);

  const theme = data?.temaToko;

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      'Halo, saya mendapat informasi dari inside UMKM dan ingin bertanya tentang produk Anda'
    );
    let phoneNumber = data?.noToko;
    if (phoneNumber?.startsWith('0')) {
      phoneNumber = '62' + phoneNumber.slice(1);
    }
    const redirectUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(redirectUrl);
  };

  // Variable For Store Checking Condition Theme Props
  const text_1 =
    theme === 'primary'
      ? styles.detailUmkm__theme__primary__text__1
      : theme === 'secondary'
        ? styles.detailUmkm__theme__secondary__text__1
        : styles.detailUmkm__theme__default__text__1;

  const text_3 =
    theme === 'primary'
      ? styles.detailUmkm__theme__primary__text__3
      : theme === 'secondary'
        ? styles.detailUmkm__theme__secondary__text__3
        : styles.detailUmkm__theme__default__text__3;

  return (
    <AntdRegistry>
      <Head>
        <title>{data?.namaToko}</title>
        <link rel="icon" href={`${data?.fotoToko}`} />
      </Head>
      <Layout title={data?.namaToko}>
        <Content
          className={classNames(
            theme === 'primary'
              ? styles.detailUmkm__theme__primary
              : theme === 'secondary'
                ? styles.detailUmkm__theme__secondary
                : styles.detailUmkm__theme__default
          )}
        >
          <Spin spinning={isLoading}>
            <Row className={styles.detailUmkm__content__main}>
              {/* Container */}
              <div className={styles.detailUmkm__content__main__subMain}>
                {/* Header Content */}
                <Row gutter={[12, 12]} justify={'start'} wrap={false}>
                  <Col xs={'25%'} lg={'15%'}>
                    <Flex
                      align="center"
                      wrap="nowrap"
                      style={{ width: '100%' }}
                    >
                      <Image
                        src={`${data?.fotoToko}`}
                        alt="Header Image"
                        className={
                          styles.detailUmkm__content__main__subMain__image
                        }
                        loading="lazy"
                        preview={false}
                      />
                    </Flex>
                  </Col>
                  <Col xs={'75%'} lg={'85%'}>
                    <Flex vertical style={{ width: '100%' }}>
                      <Typography.Text
                        className={classNames(
                          styles.detailUmkm__content__main__subMain__text,
                          text_3
                        )}
                        ellipsis={{ tooltip: data?.namaToko }}
                      >
                        {data?.namaToko}
                      </Typography.Text>

                      <Typography.Text
                        className={classNames(
                          styles.detailUmkm__content__main__subMain__text__tag,
                          text_1
                        )}
                      >
                        {data?.kategoriToko}
                      </Typography.Text>
                      <Space
                        size={[6, 6]}
                        style={{ marginTop: isMobile ? 10 : 25 }}
                        styles={{ item: { display: 'flex' } }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill={
                              theme === 'primary'
                                ? 'rgba(255, 255, 255, 1)'
                                : theme === 'secondary'
                                  ? '#dcf3ff'
                                  : 'rgb(0,0,0)'
                            }
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M16.272 10.272a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            <path d="M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518zm11.276-1.691l-4.827 5.07l-5.07-4.827a7 7 0 1 1 9.897-.243" />
                          </g>
                        </svg>

                        <Typography.Text
                          className={classNames(
                            styles.detailUmkm__content__main__subMain__text__location,
                            text_1
                          )}
                          ellipsis={{ tooltip: data?.alamatToko }}
                        >
                          {data?.alamatToko}
                        </Typography.Text>
                      </Space>
                    </Flex>
                  </Col>
                </Row>

                {/* Deskripsi Section */}
                <Row className={styles.detailUmkm__deskripsi}>
                  <Col span={24}>
                    <Typography.Paragraph
                      className={classNames(
                        styles.detailUmkm__deskripsi__text__paragraph,
                        text_3
                      )}
                    >
                      <ViewContentQuill content={data?.deskripsiToko ?? ''} />
                    </Typography.Paragraph>
                  </Col>
                </Row>

                {/* Link Section */}
                <Row className={styles.detailUmkm__link}>
                  {/* link 1 */}
                  {data?.linkToko?.link1 && data?.linkToko?.label1 && (
                    <Flex
                      justify="center"
                      align="center"
                      className={styles.detailUmkm__link__flexStyle}
                      onClick={() => router.push(data?.linkToko?.link1 ?? '')}
                    >
                      <Button
                        className={classNames(styles.detailUmkm__link__button)}
                        href={data?.linkToko?.link1 ?? ''}
                        target="_blank"
                      >
                        {data?.linkToko?.label1}
                      </Button>
                    </Flex>
                  )}
                  {/* link 2 */}
                  {data?.linkToko?.link2 && data?.linkToko?.label2 && (
                    <Flex
                      justify="center"
                      align="center"
                      className={styles.detailUmkm__link__flexStyle}
                      onClick={() => router.push(data?.linkToko?.link2 ?? '')}
                    >
                      <Button
                        className={classNames(styles.detailUmkm__link__button)}
                        href={data?.linkToko?.link2 ?? ''}
                        target="_blank"
                      >
                        {data?.linkToko?.label2}
                      </Button>
                    </Flex>
                  )}
                  {/* link 3 */}
                  {data?.linkToko?.link3 && data?.linkToko?.label3 && (
                    <Flex
                      justify="center"
                      align="center"
                      className={styles.detailUmkm__link__flexStyle}
                      onClick={() => router.push(data?.linkToko?.link3 ?? '')}
                    >
                      <Button
                        className={classNames(styles.detailUmkm__link__button)}
                        href={data?.linkToko?.link3 ?? ''}
                        target="_blank"
                      >
                        {data?.linkToko?.label3}
                      </Button>
                    </Flex>
                  )}
                  {/* link 4 */}
                  {data?.linkToko?.link4 && data?.linkToko?.label4 && (
                    <Flex
                      justify="center"
                      align="center"
                      className={styles.detailUmkm__link__flexStyle}
                      onClick={() => router.push(data?.linkToko?.link4 ?? '')}
                    >
                      <Button
                        className={classNames(styles.detailUmkm__link__button)}
                        href={data?.linkToko?.link4 ?? ''}
                        target="_blank"
                      >
                        {data?.linkToko?.label4}
                      </Button>
                    </Flex>
                  )}
                </Row>

                {/* Galeri Produk Section */}
                <Row className={styles.detailUmkm__produk}>
                  <Col span={24}>
                    <Typography.Text
                      className={classNames(
                        styles.detailUmkm__produk__text,
                        text_3
                      )}
                    >
                      Produk Terlaris
                    </Typography.Text>
                  </Col>
                  <Col span={24} className={styles.detailUmkm__produk__section}>
                    <Row
                      gutter={[16, 16]}
                      style={{ padding: isMobile ? 16 : '32px 48px' }}
                      justify={{ md: 'start', lg: 'start' }}
                    >
                      {data?.produkToko?.map((item, index) => (
                        <Col key={index} xs={8}>
                          <div className={styles.detailUmkm__produk__wrapper}>
                            <Image
                              src={item.file || ''}
                              alt="Produk Terlaris"
                              className={styles.detailUmkm__produk__gambar}
                              loading="lazy"
                            />
                            <Typography.Text
                              className={styles.detailUmkm__produk__label}
                              ellipsis={{
                                tooltip:
                                  item.namaProduk || 'Produk ' + (index + 1),
                              }}
                            >
                              {item.namaProduk || 'Produk ' + (index + 1)}
                            </Typography.Text>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>

                {/* Galeri Aktivitas Section */}
                <Row className={styles.detailUmkm__aktivitas}>
                  <Col span={24}>
                    <Typography.Text
                      className={classNames(
                        styles.detailUmkm__aktivitas__text,
                        text_3
                      )}
                    >
                      Galeri
                    </Typography.Text>
                  </Col>
                  <Col span={24}>
                    {isMobile ? (
                      <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={8}
                        centeredSlides={true}
                        loop={false}
                        className="mySwiper2"
                        style={{ maxHeight: 210 }}
                      >
                        {data?.galleryToko?.map((_, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              loading="lazy"
                              src={data?.galleryToko[index]}
                              alt={`Aktivitas ${index + 1}`}
                              wrapperStyle={{ width: '100%', height: '100%' }}
                              className={
                                styles.detailUmkm__aktivitas__swiperImage
                              }
                              preview
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <Row
                        gutter={[8, 8]}
                        justify={{
                          xs: 'space-between',
                          sm: 'space-between',
                          lg: 'space-between',
                        }}
                        align={'stretch'}
                        className={styles.detailUmkm__aktivitas__wrapper}
                      >
                        {data?.galleryToko?.map((_, index) => (
                          <Col
                            key={index}
                            lg={8}
                            xs={7}
                            className={
                              styles.detailUmkm__aktivitas__imageWrapper
                            }
                          >
                            <Image
                              src={data?.galleryToko[index]}
                              alt={`Aktivitas ${index + 1}`}
                              className={
                                styles.detailUmkm__aktivitas__imageStyle
                              }
                              loading="lazy"
                              wrapperStyle={{ width: '100%', height: '100%' }}
                            />
                          </Col>
                        ))}
                      </Row>
                    )}
                  </Col>
                </Row>

                {/* Video Promosi Section */}
                {data?.videoToko && (
                  <Row className={styles.detailUmkm__video}>
                    <Col span={24}>
                      <Typography.Text
                        className={classNames(
                          styles.detailUmkm__video__text,
                          text_3
                        )}
                      >
                        Highlight
                      </Typography.Text>
                    </Col>
                    <Col
                      span={24}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <InstagramEmbed
                        url={data?.videoToko || ''}
                        width={isMobile ? '100%' : 400}
                      />
                    </Col>
                  </Row>
                )}

                {/* Lokasi Section */}
                <Row className={styles.detailUmkm__lokasi}>
                  <div className={styles.detailUmkm__lokasi__wrapper}>
                    <Typography.Text
                      className={classNames(
                        styles.detailUmkm__lokasi__text,
                        text_3
                      )}
                    >
                      Lokasi
                    </Typography.Text>
                    <iframe
                      src={`https://www.google.com/maps?q=${data?.alamatToko}}&output=embed`}
                      allowFullScreen={true}
                      aria-hidden="false"
                      tabIndex={0}
                      className={styles.detailUmkm__lokasi__map}
                    />
                    {/* <div>
                    <ViewContentQuill content={content} />
                  </div> */}
                  </div>
                </Row>

                {/* Button Section */}
                <Row className={styles.detailUmkm__kontak}>
                  <Col span={24} className={styles.detailUmkm__kontak__wrapper}>
                    <Button
                      type="primary"
                      className={styles.detailUmkm__kontak__button}
                      onClick={handleWhatsAppRedirect}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                        />
                      </svg>
                      <Typography.Text
                        className={styles.detailUmkm__kontak__text}
                      >
                        Hubungi Toko Kami
                      </Typography.Text>
                    </Button>
                  </Col>
                </Row>

                {/* Watermark Section */}
                <Row className={styles.detailUmkm__watermark}>
                  <Col
                    span={24}
                    className={styles.detailUmkm__watermark__wrapper}
                  >
                    <Button
                      type="text"
                      href="/"
                      className={styles.detailUmkm__watermark__button}
                    >
                      <Flex
                        justify="center"
                        align="center"
                        gap={isMobile ? 8 : 24}
                      >
                        <Typography.Text
                          className={styles.detailUmkm__watermark__button__text}
                        >
                          Partner with
                        </Typography.Text>
                        <Flex align="center" justify="center" vertical>
                          <Image
                            src="/inside-umkm.png"
                            alt="Inside UMKM"
                            preview={false}
                            className={
                              styles.detailUmkm__watermark__button__logo
                            }
                            loading="lazy"
                          />
                          <Typography.Text
                            className={
                              styles.detailUmkm__watermark__button__desc
                            }
                          >
                            Associated with Inside Lombok
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Spin>
          {/* Content Main Section */}
        </Content>
      </Layout>
    </AntdRegistry>
  );
};

export default DetailUmkm;
