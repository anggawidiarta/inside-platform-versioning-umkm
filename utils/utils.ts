import { AnyObject } from 'yup/lib/types';
import * as yup from 'yup';
import axios, { AxiosError } from 'axios';
import { UploadFile } from 'antd';
import { ApiResponse } from '@lib/entities/Common';
import { IDataProfile } from '@lib/entities/Auth';
import { UIEvent, useEffect, useState } from 'react';


// TODO: WIP - Implement useIsMobileScreen
// import { useMediaQuery } from 'react-responsive';

// export const useIsMobileScreen = (): boolean => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile;
// };

export const useIsMobileScreen = () => {
  // Tetapkan breakpoint untuk mobile, misal 768px sebagai maksimum untuk mobile
  const mobileBreakpoint = 768;

  // State untuk menyimpan status apakah layar adalah mobile
  const [isMobile, setIsMobile] = useState(false); // Default ke false sampai diketahui pasti

  useEffect(() => {
    // Cek apakah sedang dijalankan di client-side
    if (typeof window !== 'undefined') {
      // Inisialisasi status mobile berdasarkan lebar window saat ini
      setIsMobile(window.innerWidth < mobileBreakpoint);

      // Handler untuk memeriksa ukuran window
      const handleResize = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint);
      };

      // Menambahkan event listener saat komponen di-mount
      window.addEventListener('resize', handleResize);

      // Cleanup function untuk menghapus event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [mobileBreakpoint]); // Dependensi useEffect adalah mobileBreakpoint

  return isMobile;
};

// capitalize first letter of each word and lowercase the rest
export const capitalize = (str: string): string => {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const capitalizeOnUnderline = (str: string): string => {
  if (typeof str !== 'string') return '';

  // Ganti karakter "_" dengan spasi
  str = str.replace(/_/g, ' ');

  const words = str.toLowerCase().split(' ');

  // Jika ada kata dalam array, kapitalisasi huruf pertama pada kata pertama
  if (words.length > 0) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  }

  // Gabungkan kembali kata-kata menjadi string
  return words.join(' ');
};

export const yupValidator = <T extends AnyObject>(
  schema: yup.SchemaOf<AnyObject>,
  getFieldsValue: () => T
) => ({
  async validator({ field }: any) {
    await schema.validateSyncAt(field, getFieldsValue());
  },
});

// return 2023-10-26 13:05:27 from 2023-10-26T13:05:27.000Z
export const formatDate = (
  val: Date | string | number,
  { withTime = false }: { withTime?: boolean }
): string => {
  if (withTime) {
    return new Date(val)
      .toISOString()
      .replace(/T|Z|\.\d{3}/g, ' ')
      .trim();
  }
  return new Date(val).toISOString().substring(0, 10);
};

// return count down from now to date. ex: 2 days
export const countDown = (date: Date | string | number): string => {
  const now = new Date().getTime();
  const distance = new Date(date).getTime() - now;

  if (distance < 0) {
    return 'CLOSED';
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // uncomment this if you want to show hours. ex: 4 hours
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return `${days} HARI ${hours} JAM`;
};

// return count down from now to date. ex: 9953974775 (in timestamp milliseconds)
export const countDownTimestamp = (date: Date | string | number): number => {
  const now = new Date().getTime();
  const distance = new Date(date).getTime() - now;

  if (distance < 0) {
    return 0;
  }

  return distance;
};

// return count down from now to date and time format. example: 2 days 12:30:30
export const countDownWithTime = (date: Date | string | number): string => {
  const now = new Date().getTime();
  const distance = new Date(date).getTime() - now;

  if (distance < 0) {
    return 'Expired';
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days} days ${hours}:${minutes}:${seconds}`;
};

// scroll to top of the page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// getting error message from API
export const getErrorMessage = (error: unknown) => {
  const errorResponse = error as AxiosError;
  return errorResponse?.response?.data;
};

// return date format from Date to string ex: Kamis, 17 Agustus 2020
export const formatDateToIndonesian = (
  date: Date | string | number
): string => {
  if (!date) return '-';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString(
    'id-ID',
    options as unknown as Intl.DateTimeFormatOptions
  );
  return formattedDate.toUpperCase();
};

// return date format from Date to string. example: Kamis, 17 Agustus 2020 12:30 WIB
export const formatDateToIndonesianWithTime = (
  date: Date | string | number
): string => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const formattedDate = new Date(date).toLocaleDateString(
    'id-ID',
    options as unknown as Intl.DateTimeFormatOptions
  );

  return formattedDate.toUpperCase();
};

// check if object is empty
export const isObjectEmpty = (objectName: Object | undefined | null) => {
  if (!objectName) return true;
  if (typeof objectName !== 'object') return true;
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

// gabungkan dua array dengan menghapus duplikat
export const mergeArray = (array1: any[], array2: any[]) => {
  const merged = [...array1];

  array2.forEach((item) => {
    const found = merged.find((elem) => elem['id'] === item['id']);
    if (!found) {
      merged.push(item);
    }
  });

  return merged;
};

type ItemOptionType = {
  id: string;
  totalScore: number;
  name: string;
};

// sort total score in form submission
export const sortingTotalScore = (dataSort: ItemOptionType[]) => {
  if (!dataSort) return [];
  const sortingResult = [...dataSort].sort((a, b) => {
    return b.totalScore - a.totalScore;
  });
  return sortingResult;
};

export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}

export const formatCurrency = (amount: number) => {
  // Memisahkan ribuan dengan menggunakan regex
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// replace all element h html to p tag
export const replaceHElementToPTag = (text: string) => {
  if (!text) return '';
  // Ganti semua elemen <h1>, <h2>, ..., <h6> dengan <p>
  const replacedText = text
    .replace(/<h[1-6]>/g, '<p>')
    .replace(/<\/h[1-6]>/g, '</p>')
    .replace(/<h[1-6] class="ql-align-right">/g, '<p>')
    .replace(/<\/h[1-6]>/g, '</p>')
    .replace(/<h[1-6] class="ql-align-left">/g, '<p>')
    .replace(/<\/h[1-6]>/g, '</p>')
    .replace(/<h[1-6] class="ql-align-center">/g, '<p>')
    .replace(/<\/h[1-6]>/g, '</p>');

  // Ganti semua tag <img> dengan string kosong
  const finalText = replacedText.replace(/<img[^>]*>/g, '');

  return finalText;
};

// replace all element strong to b tag
export const replaceHElementStrong = (text: string) => {
  if (!text) return '';
  const replacedTag = text
    .replace(/<strong/g, '<b')
    .replace(/<\/strong>/g, '</b>');

  return replacedTag;
};

// check file path extension is image or not
export const isImage = (filePath: string) => {
  const ext = filePath?.substring(filePath.lastIndexOf('.') + 1);
  const imageExt = ['jpg', 'jpeg', 'png'];
  return imageExt.includes(ext);
};

// check file path extension is document or not
export const isDocument = (filePath: string) => {
  const ext = filePath?.substring(filePath.lastIndexOf('.') + 1);
  const documentExt = ['pdf', 'doc', 'docx'];
  return documentExt.includes(ext);
};

// file: UploadFile[]
// fileTypes example: ['pdf', 'jpg', 'jpeg', 'png']
export const validateFileType = (file: UploadFile[], fileTypes: string[]) => {
  let valid = true;
  if (file) {
    file.forEach((_file) => {
      if (
        !fileTypes.includes(_file?.type!.slice(_file?.type!.search('/') + 1))
      ) {
        valid = false;
      }
    });
  }
  return valid;
};

// file: UploadFile[]
// size example: 3 (in MB)
export const validateFileSize = (file: UploadFile[], size: number) => {
  let valid = true;
  if (file) {
    file.forEach((_file) => {
      if (_file?.size) {
        if (_file.size / 1024 / 1024 > size) {
          valid = false;
        }
      }
    });
  }
  return valid;
};

// file: UploadFile[]
export const checkFileImageType = (file: UploadFile[]) => {
  const dataFile: UploadFile[] = [];
  if (file) {
    file.forEach((_file) => {
      if (isImage(_file.name)) {
        dataFile.push(_file);
      }
    });
  }

  return dataFile?.length > 0;
};

// file: UploadFile[]
export const checkFileDocumentType = (file: UploadFile[]) => {
  const dataFile: UploadFile[] = [];
  if (file) {
    file.forEach((_file) => {
      if (isDocument(_file.name)) {
        dataFile.push(_file);
      }
    });
  }

  return dataFile?.length > 0;
};

export const helperApiResponse = <T>(
  response: ApiResponse<T>
): {
  isSuccess: boolean;
  data: T | null;
  message: string;
} => {
  if ('data' in response && response?.data) {
    return {
      isSuccess: true,
      data: response?.data,
      message: response?.message,
    };
  } else if ('code' in response && response?.code === 400) {
    return {
      isSuccess: false,
      data: null,
      message: response?.message,
    };
  } else if ('errors' in response && response?.errors) {
    return {
      isSuccess: false,
      data: null,
      message: response?.errors[0]?.message[0],
    };
  } else {
    return {
      isSuccess: false,
      data: null,
      message: 'Terjadi kesalahan',
    };
  }
};

export const truncateText = (text: string, maxWords: number): string => {
  const words = text.split(/\s+/);
  const truncatedWords = words.slice(0, maxWords);
  const truncatedText = truncatedWords.join(' ');
  return truncatedText;
};

export const checkViewerAccess = (data: IDataProfile, slug: string) => {
  return !!data?.competitionViewerAccessInfo.competitionIds.find(
    (item) => item?.toString() === slug
  );
};

export const mappingJuryAccess = (data: IDataProfile, slug: string) => {
  const mappingData: number[] = [];
  data?.juryAccessInfo.detail.forEach((item) => {
    if (item.competitionId?.toString() === slug) {
      mappingData.push(...(item.stageIds as unknown as number[]));
    }
  });
  return mappingData;
};

export const onPopupScrollHandle = (
  event: UIEvent<HTMLDivElement, globalThis.UIEvent>,
  fetchNext: () => void,
  isFetching: boolean
) => {
  const target = event.target as HTMLDivElement;
  if (
    target.scrollTop + target.offsetHeight === target.scrollHeight &&
    !isFetching
  ) {
    target.scrollTo(0, target.scrollHeight);
    fetchNext();
  }
};

export function toKebabCase(input: string): string {
  return input.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
}
