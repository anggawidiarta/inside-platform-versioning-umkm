import { fetcher } from '@configs/fetcher';
import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList, TCommonError } from '@lib/entities/Common';
import { TRumah } from '@lib/entities/Rumah';
import { TUmkmItem } from '@lib/entities/Umkm';
import { isAxiosError } from 'axios';

const fetchListUmkm = async (
  params: ICommonParamsList
): Promise<IPagination<TUmkmItem>> => {
  try {
    const res = await fetcher({
      method: 'GET',
      url: '/umkm',
      params: params,
    });
    return res?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};

const fetchDetailUmkm = async (slug: string): Promise<TUmkmItem> => {
  const configApi = {
    method: 'GET',
    url: `/umkm/${slug}`,
  };
  try {
    const res = await fetcher(configApi);
    return res?.data?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};

const fetchJenisUmkm = async (): Promise<[]> => {
  const configApi = {
    method: 'GET',
    url: `/umkm/kategori`,
  };
  try {
    const res = await fetcher(configApi);
    return res?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};

export { fetchListUmkm, fetchDetailUmkm, fetchJenisUmkm };
