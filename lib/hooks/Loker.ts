import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList } from '@lib/entities/Common';
import { TLoker } from '@lib/entities/Loker';
import { fetchDetailLoker, fetchListLoker } from '@lib/repositories/loker';
import { UseQueryResult, useQuery } from 'react-query';

const useFetchLokerList = (
  params: ICommonParamsList
): UseQueryResult<IPagination<TLoker>> => {
  return useQuery<IPagination<TLoker>>(
    ['fetchListLoker', params],
    async () => await fetchListLoker(params),
    {
      enabled: !!params,
    }
  );
};

// get detail
const useFetchLokerDetail = (slug: string): UseQueryResult<TLoker, Error> => {
  return useQuery(['fetchDetailILoker', slug], () => fetchDetailLoker(slug), {
    enabled: !!slug,
  });
};

export { useFetchLokerList, useFetchLokerDetail };
