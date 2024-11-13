import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperRef } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useIsMobileScreen } from '@utils/utils';
import Image from 'next/image';

interface SwiperProps {
  imageSources: string[];
  mainStyle?: React.CSSProperties;
}

export const SwiperComponent: React.FC<SwiperProps> = ({
  imageSources,
  mainStyle,
}) => {
  const isMobile = useIsMobileScreen();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef<SwiperRef>();

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        style={mainStyle}
      >
        {imageSources.map((imageSource, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageSource}
              alt={`Image ${index + 1}`}
              loading="lazy"
              width={750}
              height={750}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumbs swiper */}
      <Swiper
        //@ts-ignore
        onClick={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={isMobile ? 3 : 7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{ marginTop: 25 }}
      >
        {imageSources.map((imageSource, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageSource}
              alt={`Image ${index + 1}`}
              width={750}
              height={750}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
