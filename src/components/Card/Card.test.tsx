import React from 'react';
import { render } from '@testing-library/react-native';
import Card from './Card';

describe('Card', () => {
  it('should render title and description', () => {
    const { getByText } = render(
      <Card title="Test Title" description="Test Description" />
    );
    const title = getByText('Test Title');
    const description = getByText('Test Description');
    expect(title).toBeDefined();
    expect(description).toBeDefined();
  });

  it('should render background image', () => {
    const { getByTestId } = render(
      <Card
        title="Test Title"
        description="Test Description"
        backgroundImage="https://example.com/image.jpg"
      />
    );
    const backgroundImage = getByTestId('background-image');
    expect(backgroundImage.props.source.uri).toBe(
      'https://example.com/image.jpg'
    );
  });

  it('should render with custom styles', () => {
    const { getByTestId } = render(
      <Card
        title="Test Title"
        description="Test Description"
        backgroundColor="#ff0000"
        titleColor="#00ff00"
        descriptionColor="#0000ff"
        height={200}
      />
    );
    const container = getByTestId('container');
    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: '#ff0000',
          height: 200,
        }),
      ])
    );
    const title = getByTestId('title');
    expect(title.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#00ff00',
        })
      ])
    );
    const description = getByTestId('description');
    expect(description.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#0000ff',
        })
      ])
    );
  });
});