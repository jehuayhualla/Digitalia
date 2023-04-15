import useBoards from '../hooks/useBoards';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNav';
import styled from 'styled-components/native';
import Spinner from '../components/Spiner';
import ErrorMessage from '../components/ErrorMessage';
import TouchableCard from '../components/TouchableCard';

type Props = StackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({ navigation }: Props) {
  const { data, isLoading, error } = useBoards('jenhde');

  if(isLoading) {
    return (<Spinner />);
  }

  if(error || !data) {
    return (<ErrorMessage message='Something went wrong!' />);
  }

  return (
    <Container>
      <ScrollView>
        {data.map((board: any) => (
          <TouchableCard
            key={board.id}
            title={board.name}
            description={board.desc}
            backgroundImage={board.prefs.backgroundImage}
            onPress={() => navigation.navigate('List', { id: board.id, isMovingCard: false })}
          />
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

export default HomeScreen;