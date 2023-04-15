import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNav';
import styled from 'styled-components/native';
import Spinner from '../components/Spiner';
import useLists from '../hooks/useLists';
import ErrorMessage from '../components/ErrorMessage';
import TouchableCard from '../components/TouchableCard';
import { useEffect } from 'react';
import useCards, { moveCard } from '../hooks/useCards';

type Props = StackScreenProps<RootStackParamList, 'List'>;


function ListScreen({ navigation, route }: Props) {
  const { id, isMovingCard, cardId, mutateCards } = route.params;
  const { data, isLoading, error } = useLists(id);
  

  useEffect(() => {
    if(isMovingCard) {
      navigation.setOptions({ title: 'Select a list', headerLeft: () => null})
    }
  }, [isMovingCard])

  const handleMovingCard = async (listId: string) => {
    if(cardId && mutateCards) {
      await moveCard(cardId, listId)
      await mutateCards();
    }
    navigation.pop();
  }

  const handleNavigateToCard = (id: string, listId: string) => {
    navigation.push('Card', { id, listId})
  }

  if(isLoading) {
    return (<Spinner />);
  }

  if(error || !data) {
    return (<ErrorMessage message='Something went wrong!' />);
  }

  return (
    <Container>
      <ScrollView>
        {data.lists.map((list: any) => (
          <TouchableCard
            key={list.id} 
            title={list.name} 
            height={100} 
            backgroundColor="#ebecf0" 
            titleColor="#162b4d" 
            onPress={() => {
              if(isMovingCard) {
                handleMovingCard(list.id);
              } else {
                handleNavigateToCard(list.id, id);
              }
            }} />
        ))}
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 16px; 
`;

export default ListScreen;