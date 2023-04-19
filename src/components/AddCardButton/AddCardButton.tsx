import React, { useState } from 'react';
import { Modal, TextInput } from 'react-native';
import styled from 'styled-components/native';

interface AddCardButtonProps {
  onAddCard: (title: string) => void;
}

const AddCardButton = ({ onAddCard }: AddCardButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const [cardTitle, setCardTitle] = useState('');

  const handlePress = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCardTitle('');
  };

  const handleTextChange = (text: string) => {
    setCardTitle(text);
  };

  const handleAddCard = () => {
    onAddCard(cardTitle);
    handleModalClose();
  };

  return (
    <>
      <Container testID="add-button" onPress={handlePress}>
        <Text>+</Text>
      </Container>
      <Modal testID="modal" visible={showModal} animationType="slide" onRequestClose={handleModalClose}>
        <ModalContainer>
          <TextInput testID="input" placeholder="Enter card title" value={cardTitle} onChangeText={handleTextChange} />
          <ButtonContainer>
            <Button testID="add-card-button" onPress={handleAddCard}>
              <ButtonText>Add</ButtonText>
            </Button>
            <Button onPress={handleModalClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
    </>
  );
};

const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #0079bf;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2.62px;
  z-index: 1;
  elevation: 7;
`;

const Text = styled.Text`
  font-size: 16px;
  color: white;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #027aff;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default AddCardButton;