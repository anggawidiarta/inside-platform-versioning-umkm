import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList } from '@lib/entities/Common';
import { TKendaraan } from '@lib/entities/Kendaraan';
import {
  fetchDetailKendaraan,
  fetchListKendaraan,
} from '@lib/repositories/kendaraan';
import { UseQueryResult, useQuery } from 'react-query';

const useFetchKendaraanList = (
  params: ICommonParamsList
): UseQueryResult<IPagination<TKendaraan>> => {
  return useQuery<IPagination<TKendaraan>>(
    ['fetchListKendaraan', params],
    async () => await fetchListKendaraan(params),
    {
      enabled: !!params,
    }
  );
};

// get detail
const useFetchKendaraanDetail = (
  slug: string
): UseQueryResult<TKendaraan, Error> => {
  return useQuery(
    ['fetchDetailKendaraan', slug],
    () => fetchDetailKendaraan(slug),
    {
      enabled: !!slug,
    }
  );
};

export { useFetchKendaraanList, useFetchKendaraanDetail };
