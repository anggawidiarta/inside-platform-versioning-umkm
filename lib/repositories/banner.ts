import { fetcher } from '@configs/fetcher';
import { IPagination } from '@lib/dto/Pagination';
import { TBanner } from '@lib/entities/Banner';
import { ICommonParamsList, TCommonError } from '@lib/entities/Common';
import { TRumah } from '@lib/entities/Rumah';
import { isAxiosError } from 'axios';

const fetchListBanner = async (
  params: ICommonParamsList
): Promise<IPagination<TBanner>> => {
  try {
    const res = await fetcher({
      method: 'GET',
      url: '/banner?lokasiBanner=platform',
      params: params,
    });
    return res?.data?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};


export { fetchListBanner };
