import axios from 'axios';
import useSWR from 'swr';
import fetcher, { generateUrl }  from '../libs/fetcher';

const useCards = (listId: string) => {
  const { data, error, isLoading, mutate } = useSWR(listId ? `/lists/${listId}/cards?fields=id,name,desc` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export const moveCard = async (cardId: string, listId: string) => {
  const endpoint = generateUrl(`/cards/${cardId}?idList=${listId}`);

  try {
    await axios.put(endpoint);
  }
  catch (error) {
    console.log(error);
  }
}

export const createCard = async (listId: string, name: string) => {
  const endpoint = generateUrl(`/cards?idList=${listId}&name=${name}`);

  try {
    await axios.post(endpoint);
  }
  catch (error) {
    console.log(error);
  }
}

export default useCards;