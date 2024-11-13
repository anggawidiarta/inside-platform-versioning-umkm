import { fetcher } from '@configs/fetcher';
import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList, TCommonError } from '@lib/entities/Common';
import { TKendaraan } from '@lib/entities/Kendaraan';
import { isAxiosError } from 'axios';

const fetchListKendaraan = async (
  params: ICommonParamsList
): Promise<IPagination<TKendaraan>> => {
  try {
    const res = await fetcher({
      method: 'GET',
      url: '/kendaraan',
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

const fetchDetailKendaraan = async (slug: string): Promise<TKendaraan> => {
  const configApi = {
    method: 'GET',
    url: `/kendaraan/${slug}`,
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

export { fetchListKendaraan, fetchDetailKendaraan };
