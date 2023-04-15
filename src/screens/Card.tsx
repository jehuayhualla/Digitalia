import { useEffect } from 'react';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNav';
import styled from 'styled-components/native';
import Spinner from '../components/Spiner';
import ErrorMessage from '../components/ErrorMessage';
import useCards, { createCard } from '../hooks/useCards';
import LongTouchCard from '../components/LongTouchCard';
import AddCardButton from '../components/AddCardButton';

type Props = StackScreenProps<RootStackParamList, 'Card'>;


function CardScreen({ navigation, route }: Props) {
  const { id, listId } = route.params;
  const { data, isLoading, error, mutate: mutateCards } = useCards(id);

  const onLongPress = (cardId: string) => {
    navigation.push('List', { id: listId, isMovingCard: true, cardId, mutateCards })
  }

  const handleAddCard = async (title: string) => {
    await createCard(id, title);
    await mutateCards();
  }

  if(isLoading) {
    return (<Spinner />);
  }

  if(error || !data) {
    return (<ErrorMessage message='Something went wrong!' />);
  }

  return (
    <Container>
      <Tip>Tip: Long press on a card to move it to another list</Tip>
      <AddCardButton onAddCard={handleAddCard} />
      <ScrollView>
        {data.map((card: any) => (
          <LongTouchCard key={card.id} title={card.name} description={card.desc} onLongPress={() => onLongPress(card.id)} height={100} backgroundColor="#1674b1"/>
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

const Tip = styled.Text`
  background-color: #f2f2f2;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 14px;
  color: #333333;
  align-self: center;
`;

export default CardScreen;