import { fetcher } from '@configs/fetcher';
import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList, TCommonError } from '@lib/entities/Common';
import { TLoker } from '@lib/entities/Loker';
import { isAxiosError } from 'axios';

const fetchListLoker = async (
  params: ICommonParamsList
): Promise<IPagination<TLoker>> => {
  try {
    const url = `/loker`;
    const res = await fetcher({
      method: 'GET',
      url: url,
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

const fetchDetailLoker = async (slug: string): Promise<TLoker> => {
  const configApi = {
    method: 'GET',
    url: `/loker/${slug}`,
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

export { fetchListLoker, fetchDetailLoker };
