import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LongTouchCard from './LongTouchCard';

describe('LongTouchCard', () => {
  it('should call onLongPress when long pressed', () => {
    const onLongPressMock = jest.fn();
    const { getByTestId } = render(
      <LongTouchCard
        title="Test Title"
        description="Test Description"
        onLongPress={onLongPressMock}
      />
    );
    const card = getByTestId('container');
    fireEvent(card, 'onLongPress');
    expect(onLongPressMock).toHaveBeenCalled();
  });
});