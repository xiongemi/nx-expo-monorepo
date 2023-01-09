import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface CarouselActionsProps {
  children: JSX.Element;
}

export function CarouselActions({ children }: CarouselActionsProps) {
  return (
    <View style={styles.carouselActions} testID="carousel-actions">
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CarouselActions;
