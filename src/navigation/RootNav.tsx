import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ListScreen from '../screens/List';
import CardScreen from '../screens/Card';
import { KeyedMutator } from 'swr';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  List: { id: string, isMovingCard: boolean, cardId?: string, mutateCards?: KeyedMutator<any> };
  Card: { id: string, listId: string };
};

export default function RootNav() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Card" component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }