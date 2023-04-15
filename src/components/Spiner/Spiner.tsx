import React from 'react';
import styled from 'styled-components/native';


const Spinner = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Loader = styled.ActivityIndicator`
  color: #026aa7,
  size: large,
`;

export default Spinner;
