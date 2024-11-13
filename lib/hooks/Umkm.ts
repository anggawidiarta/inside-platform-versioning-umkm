import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList } from '@lib/entities/Common';
import { TUmkmItem } from '@lib/entities/Umkm';
import {
  fetchDetailUmkm,
  fetchJenisUmkm,
  fetchListUmkm,
} from '@lib/repositories/umkm';
import { UseQueryResult, useQuery } from 'react-query';

const useFetchUmkmList = (
  params: ICommonParamsList
): UseQueryResult<IPagination<TUmkmItem>> => {
  return useQuery<IPagination<TUmkmItem>>(
    ['fetchList', params],
    async () => await fetchListUmkm(params),
    {
      enabled: !!params,
    }
  );
};

// get detail
const useFetchUmkmDetail = (slug: string): UseQueryResult<TUmkmItem, Error> => {
  return useQuery(['fetchDetailUmkm', slug], () => fetchDetailUmkm(slug), {
    enabled: !!slug,
  });
};

const useFetchUmkmJenis = (): UseQueryResult<[], Error> => {
  return useQuery(['fetchUmkmJenis'], () => fetchJenisUmkm(), {
    enabled: true,
  });
};
export { useFetchUmkmList, useFetchUmkmDetail, useFetchUmkmJenis };
