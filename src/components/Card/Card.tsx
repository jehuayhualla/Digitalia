import React from 'react';
import styled from 'styled-components/native';
import { Image, Dimensions, TouchableWithoutFeedback, ColorValue } from 'react-native';

export interface CardProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: ColorValue;
  titleColor?: ColorValue;
  descriptionColor?: ColorValue;
  height?: number;
}

const Card = ({ title, description, backgroundImage, height = undefined, backgroundColor = undefined, titleColor = undefined, descriptionColor = undefined }: CardProps) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <Container testID="container" style={{ height: height ?? screenHeight * 0.2, backgroundColor: backgroundColor }}>
      {backgroundImage && <BackgroundImage testID="background-image" source={{ uri: backgroundImage }} resizeMode="cover" />} 
      <Content>
        <Title testID="title" style={{ color: titleColor ?? '#fff' }} >{title}</Title>
          {description && <Description testID="description" style={{ color: descriptionColor ?? '#fff' }} >{description}</Description>} 
      </Content>
    </Container>
  );
};

const Container = styled.View`
  border-radius: 16px;
  margin-bottom: 16px;
  shadow-color: #a3a3a3;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  opacity: 0.8;
`;

const Content = styled.View`
  padding: 16px;
  background-color: transparent;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #7a7a7a;
`;

export default Card;