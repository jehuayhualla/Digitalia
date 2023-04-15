import useSWR from 'swr';

import fetcher from '../libs/fetcher';

const useLists = (boardId: string) => {
  const { data, error, isLoading, mutate } = useSWR(boardId ? `/boards/${boardId}?fields=id,name&lists=open&list_fields=id,name` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useLists;