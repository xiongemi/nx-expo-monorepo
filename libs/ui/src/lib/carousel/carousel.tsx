import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';

export interface CarouselProps {
  imageUri?: string;
  title?: string;
  content: string;
}

export function Carousel({ imageUri, title, content }: CarouselProps) {
  return (
    <Card mode="contained" testID="card">
      {imageUri && <Card.Cover source={{ uri: imageUri }} />}
      <Card.Content testID="card-content">
        {title && <Title>{title}</Title>}
        <View style={styles.content}>
          <Text variant="bodyLarge">{content}</Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Carousel;
