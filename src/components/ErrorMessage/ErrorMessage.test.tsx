import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render error message', () => {
    const { getByText } = render(<ErrorMessage message="Test Error" />);
    const errorMessage = getByText('Test Error');
    expect(errorMessage).toBeDefined();
  });
});