import { AsyncComponentProps } from '@nx-expo-monorepo/models';
import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Text, MD3Colors, Button } from 'react-native-paper';

export interface CarouselProps extends AsyncComponentProps {
  imageUri?: string;
  title?: string;
  content?: string;
  onReload: () => void;
}

export function Carousel({
  imageUri,
  title,
  content,
  isSuccess,
  isError,
  isLoading,
  onReload,
}: CarouselProps) {
  return (
    <Card mode="contained" testID="carousel-card" style={styles.carouselCard}>
      {isSuccess && (
        <>
          {imageUri && <Card.Cover source={{ uri: imageUri }} />}
          <Card.Content testID="carousel-card-content">
            {title && <Title>{title}</Title>}
            <Text variant="bodyLarge">{content}</Text>
          </Card.Content>
        </>
      )}
      {isLoading && (
        <ActivityIndicator
          animating={true}
          size="large"
          color={MD3Colors.primary50}
        />
      )}
      {isError && (
        <>
          <Text style={styles.error} variant="titleLarge">
            Failed to load
          </Text>
          <Button icon="alert" mode="contained" onPress={onReload}>
            Reload
          </Button>
        </>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  carouselCard: {
    height: '100%',
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: MD3Colors.error50,
  },
});

export default Carousel;
