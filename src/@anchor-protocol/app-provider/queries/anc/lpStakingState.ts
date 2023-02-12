import {
  AncLpStakingState,
  ancLpStakingStateQuery,
} from "@anchor-protocol/app-fns";
import { createQueryFn } from "@libs/react-query-utils";
import { useQuery, UseQueryResult } from "react-query";
import { useAnchorWebapp } from "../../contexts/context";
import { ANCHOR_QUERY_KEY } from "../../env";

export function useAncLpStakingStateQuery(): UseQueryResult<
  AncLpStakingState | undefined
> {
  const { queryClient, contractAddress, queryErrorReporter } =
    useAnchorWebapp();

  const result = useQuery(
    [
      ANCHOR_QUERY_KEY.ANC_LP_STAKING_STATE,
      contractAddress.anchorToken.staking,
    ],
    createQueryFn(ancLpStakingStateQuery, queryClient!),
    {
      refetchInterval: 1000 * 60 * 2,
      keepPreviousData: true,
      onError: queryErrorReporter,
      enabled: !!queryClient,
    }
  );

  return result;
}
