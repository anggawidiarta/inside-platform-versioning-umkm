import { IPagination } from '@lib/dto/Pagination';
import { ICommonParamsList } from '@lib/entities/Common';
import { TLoker } from '@lib/entities/Loker';
import { TRumah } from '@lib/entities/Rumah';
import { fetchDetailRumah, fetchListRumah } from '@lib/repositories/rumah';
import { UseQueryResult, useQuery } from 'react-query';

const useFetchRumahList = (
  params: ICommonParamsList
): UseQueryResult<IPagination<TRumah>> => {
  return useQuery<IPagination<TRumah>>(
    ['fetchListRumah', params],
    async () => await fetchListRumah(params),
    {
      enabled: !!params,
    }
  );
};

// get detail
const useFetchRumahDetail = (slug: string): UseQueryResult<TRumah, Error> => {
  return useQuery(['fetchDetailRumah', slug], () => fetchDetailRumah(slug), {
    enabled: !!slug,
  });
};

export { useFetchRumahList, useFetchRumahDetail };
