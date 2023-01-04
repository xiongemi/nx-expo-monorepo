import React from 'react';
import { View } from 'react-native';

import { Card, Title, Paragraph, FAB } from 'react-native-paper';

export interface CarouselProps {}

export function Carousel(props: CarouselProps) {
  return (
    <>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
      <View>
        <FAB
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </>
  );
}

export default Carousel;
