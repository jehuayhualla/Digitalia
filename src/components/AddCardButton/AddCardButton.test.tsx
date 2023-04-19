import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddCardButton from './AddCardButton';

describe('AddCardButton', () => {
  it('should show modal when pressed', () => {
    const { getByTestId } = render(<AddCardButton onAddCard={() => {}} />);
    const addButton = getByTestId('add-button');
    fireEvent.press(addButton);
    const modal = getByTestId('modal');
    expect(modal.props.visible).toBe(true);
  });

  it('should add card when "Add" button is pressed', () => {
    const onAddCardMock = jest.fn();
    const { getByTestId } = render(<AddCardButton onAddCard={onAddCardMock} />);
    const addButton = getByTestId('add-button');
    fireEvent.press(addButton);
    const addCardButton = getByTestId('add-card-button');
    const input = getByTestId('input');
    fireEvent.changeText(input, 'New Card');
    fireEvent.press(addCardButton);
    expect(onAddCardMock).toHaveBeenCalledWith('New Card');
  });
});