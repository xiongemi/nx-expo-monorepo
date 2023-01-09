import { AsyncComponentProps } from '@nx-expo-monorepo/models';
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Text, MD3Colors, Button } from 'react-native-paper';

export interface CarouselProps extends AsyncComponentProps {
  imageUri?: string;
  title?: string;
  content: string;
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
    <Card mode="contained" testID="carousel-card">
      {isSuccess && (
        <>
          {imageUri && <Card.Cover source={{ uri: imageUri }} />}
          <Card.Content testID="carousel-card-content">
            {title && <Title>{title}</Title>}
            <View style={styles.content}>
              <Text variant="bodyLarge">{content}</Text>
            </View>
          </Card.Content>
        </>
      )}
      {isLoading && (
        <View style={styles.content}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={MD3Colors.primary50}
          />
        </View>
      )}
      {isError && (
        <View style={styles.content}>
          <Text style={styles.error} variant="titleLarge">
            Failed to load
          </Text>
          <Button icon="alert" mode="contained" onPress={onReload}>
            Reload
          </Button>
        </View>
      )}
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
  error: {
    color: MD3Colors.error50,
  },
});

export default Carousel;
