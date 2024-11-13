/* eslint-disable @next/next/no-img-element */
import { Header, MainLayout } from '@components/Layout';
import { NextPage } from 'next';
import React, { useMemo, useState } from 'react';
import styles from './Umkm.module.scss';
import {
  Typography,
  Col,
  Row,
  Button,
  Empty,
  Input,
  Dropdown,
  Space,
  Image,
} from 'antd';
import UmkmCard from '@components/Card/UmkmCard';
import { useFetchUmkmJenis, useFetchUmkmList } from '@lib/hooks/Umkm';
import { TUmkmItem } from '@lib/entities/Umkm';
import { useIsMobileScreen } from '@utils/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { ICommonParamsList } from '@lib/entities/Common';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const UmkmPage: NextPage = () => {
  const isMobile = useIsMobileScreen();
  const [inputSearch, setInputSearch] = useState<string>('');
  const [kategori, setKategori] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const [dataUmkm, setDataUmkm] = useState<TUmkmItem[]>([]);
  const [params, setParams] = useState<ICommonParamsList>({
    page: 1,
    per_page: 12,
    search: '',
    kategori: '',
  });

  useMemo(() => {
    setParams((prevParams) => ({
      ...prevParams,
      search: inputSearch,
      kategori: kategori,
    }));
    setDataUmkm([]);
    setParams((prevParams) => ({ ...prevParams, page: 1 }));
  }, [inputSearch, kategori]);

  const { data, isLoading } = useFetchUmkmList(params);

  useMemo(() => {
    if (data?.data) {
      setDataUmkm((prevData) => [...prevData, ...data?.data]);
    }
  }, [data]);

  const onSearch = (value: string) => {
    setInputSearch(value);
  };

  const { data: jenisUmkm } = useFetchUmkmJenis();

  return (
    <AntdRegistry>
      <MainLayout
        value={inputSearch}
        onSearch={onSearch}
        onChange={(e: any) => setInputSearch(e.target.value)}
        isLoading={isLoading}
        isUMKM
        title="Inside UMKM"
        container
      >
        {/* #region Tag Section */}
        <Row
          style={{ marginTop: 20, marginBottom: isMobile ? 32 : 20 }}
          align={'middle'}
          justify={'start'}
          gutter={[8, 8]}
          wrap
        >
          {!isMobile ? (
            jenisUmkm?.map((item: any, index) => (
              <Col key={index} className={styles.umkm__tag__wrapper}>
                <Button
                  type={selectedButton === index ? 'primary' : 'default'}
                  className={styles.umkm__tag__button}
                  style={{
                    border: 0,
                    color: 'rgba(196, 196, 196, 1)',
                  }}
                  onClick={() => {
                    setKategori(item);
                    setSelectedButton(index);
                    setInputSearch('');
                  }}
                >
                  {item}
                </Button>
              </Col>
            ))
          ) : (
            <Dropdown
              className={styles.umkm__tag__dropdown}
              trigger={['click']}
              menu={{
                items: jenisUmkm?.map((item: any, index) => ({
                  key: index,
                  label: (
                    <Button
                      type={selectedButton === index ? 'primary' : 'default'}
                      className={styles.umkm__tag__dropdown__buttonContent}
                      style={{
                        border: 0,
                        color: 'rgba(196, 196, 196, 1)',
                      }}
                      onClick={() => {
                        setKategori(item);
                        setSelectedButton(index);
                        setInputSearch('');
                      }}
                    >
                      {item}
                    </Button>
                  ),
                })),
              }}
            >
              <Button
                type="default"
                className={styles.umkm__tag__dropdown__button}
              >
                {kategori ? kategori : 'All Categories'}
                <DownOutlined style={{ fontSize: 12 }} />
              </Button>
            </Dropdown>
          )}
        </Row>
        {/* #endregion */}

        {/* #region Banner */}
        {/* TODO : WIP uncomment */}
        <Row className={styles.umkm__banner}>
          <Col span={24}>
            {!isMobile ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <Image
                    src={'/web-banner-umkm-03.webp'}
                    alt="Inside Lombok Banner"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/web-banner-umkm-04.webp'}
                    alt="Inside Lombok Banner"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/web-banner-umkm-05.webp'}
                    alt="Inside Lombok Banner"
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>
            ) : (
              <Swiper
                spaceBetween={10}
                slidesPerView="auto"
                centeredSlides={true}
                modules={[Autoplay]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <Image
                    src={'/web-banner-umkm-06.webp'}
                    alt="Inside Lombok Banner"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/web-banner-umkm-07.webp'}
                    alt="Inside Lombok Banner"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/web-banner-umkm-08.webp'}
                    alt="Inside Lombok Banner"
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>
            )}
          </Col>
        </Row>
        {/* #endregion */}

        {/* UMKM Section */}
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className={styles.umkm__umkm__wrapper}
        >
          <Row style={{ marginBottom: 15 }}>
            <Typography.Text className={styles.umkm__umkm__title}>
              Daftar UMKM
            </Typography.Text>
          </Row>

          <Row gutter={[16, 16]} justify={'start'} align={'middle'}>
            {dataUmkm?.length > 0 ? (
              dataUmkm?.map((item: TUmkmItem, i: number) => (
                <Col lg={8} md={12} xs={24} key={i}>
                  <UmkmCard items={item} />
                </Col>
              ))
            ) : (
              <Empty
                description="Tidak ada UMKM yang ditemukan"
                style={{ width: '100%', alignItems: 'center', padding: 20 }}
              />
            )}
          </Row>

          {/* Button */}
          <Row justify="center" className={styles.umkm__button__wrapper}>
            {params.page <
              Math.ceil((data?.meta?.total || 0) / params.per_page) && (
              <Button
                type="text"
                className={styles.umkm__button}
                onClick={() => {
                  setParams((prevParams) => ({
                    ...prevParams,
                    page: prevParams.page + 1,
                  }));
                }}
              >
                Muat Lainnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="rgba(12, 76, 137, 1)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m6 13l6 6l6-6M6 5l6 6l6-6"
                  />
                </svg>
              </Button>
            )}
          </Row>
        </div>
      </MainLayout>
    </AntdRegistry>
  );
};

export default UmkmPage;
