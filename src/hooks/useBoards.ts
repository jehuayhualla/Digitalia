import useSWR from 'swr';

import fetcher from '../libs/fetcher';

const useBoards = (userName: string) => {
  const { data, error, isLoading, mutate } = useSWR(userName ? `/members/${userName}/boards?filter=open` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useBoards;