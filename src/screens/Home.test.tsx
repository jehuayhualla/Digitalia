import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeScreen from './Home';
import useSWR from 'swr';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNav';
import { RouteProp } from '@react-navigation/native';

jest.mock('swr');
jest.mock('react-native-config', () => ({
  config: {}
}));

const navigation: StackNavigationProp<RootStackParamList, 'Home'> = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  dispatch: jest.fn(),
  canGoBack: jest.fn(),
  isFocused: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  replace: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  setParams: jest.fn(),
  getParent: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn()
};

const route: RouteProp<RootStackParamList, 'Home'> = {
  key: 'Home',
  name: 'Home',
  params: undefined,
};

describe('HomeScreen', () => {
  it('should render spinner when loading', () => {
    (useSWR as jest.Mock).mockImplementation((key, fetcher) => {
      return {
        data: null,
        isLoading: true,
        error: null,
      }
    });
    const { getByTestId } = render(<HomeScreen navigation={navigation} route={route}/>);
    const spinner = getByTestId('spinner');
    expect(spinner).toBeDefined();
  });

  it('should render error message when error', () => {
    (useSWR as jest.Mock).mockImplementation((key, fetcher) => {
      return {
        data: null,
        isLoading: false,
        error: 'Test Error',
      }
    });
    const { getByText } = render(<HomeScreen navigation={navigation} route={route}/>);
    const errorMessage = getByText('Something went wrong!');
    expect(errorMessage).toBeDefined();
  });

  it('should render cards when data', async () => {
    (useSWR as jest.Mock).mockImplementation((key, fetcher) => {
      return {
        data: [
          {
            id: '1',
            name: 'Test Board 1',
            desc: 'Test Description 1',
            prefs: {
              backgroundImage: 'https://example.com/image1.jpg',
            },
          },
          {
            id: '2',
            name: 'Test Board 2',
            desc: 'Test Description 2',
            prefs: {
              backgroundImage: 'https://example.com/image2.jpg',
            },
          },
        ],
        isLoading: false,
        error: null,
      }
    });
    const { getByText } = render(<HomeScreen navigation={navigation} route={route}/>);
    await waitFor(() => {
      const card1 = getByText('Test Board 1');
      const card2 = getByText('Test Board 2');
      expect(card1).toBeDefined();
      expect(card2).toBeDefined();
    });
  });
});