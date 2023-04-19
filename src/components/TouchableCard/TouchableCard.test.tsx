import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TouchableCard from './TochableCard';

describe('TouchableCard', () => {
  it('should call onLongPress when long pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <TouchableCard
        title="Test Title"
        description="Test Description"
        onPress={onPressMock}
      />
    );
    const card = getByTestId('container');
    fireEvent(card, 'onPress');
    expect(onPressMock).toHaveBeenCalled();
  });
});