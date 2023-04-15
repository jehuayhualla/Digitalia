import React from 'react';
import styled from 'styled-components/native';

interface ErrorProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <Container>
      <ErrorMessageText>{message}</ErrorMessageText>
    </Container>
  );
};

const Container = styled.View`
  background-color: #f8d7da;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ErrorMessageText = styled.Text`
  color: #721c24;
  font-size: 14px;
`;

export default ErrorMessage;