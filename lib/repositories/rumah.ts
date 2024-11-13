import { fetcher } from '@configs/fetcher';
import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList, TCommonError } from '@lib/entities/Common';
import { TRumah } from '@lib/entities/Rumah';
import { isAxiosError } from 'axios';

const fetchListRumah = async (
  params: ICommonParamsList
): Promise<IPagination<TRumah>> => {
  try {
    const res = await fetcher({
      method: 'GET',
      url: '/properti',
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

const fetchDetailRumah = async (slug: string): Promise<TRumah> => {
  const configApi = {
    method: 'GET',
    url: `/properti/${slug}`,
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

export { fetchListRumah, fetchDetailRumah };
