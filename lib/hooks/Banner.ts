import { IPagination } from "@lib/dto/Pagination";
import { TBanner } from "@lib/entities/Banner";
import { ICommonParamsList } from "@lib/entities/Common";
import { fetchListBanner } from "@lib/repositories/banner";
import { UseQueryResult, useQuery } from "react-query";

const useFetchBannerList = (
  params: ICommonParamsList
): UseQueryResult<IPagination<TBanner>> => {
  return useQuery<IPagination<TBanner>>(
    ['fetchListBanner', params],
    async () => await fetchListBanner(params),
    {
      enabled: !!params,
    }
  );
};

export { useFetchBannerList };