
import React from 'react';

import { View, StyleSheet } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';

export interface CarouselActionsProps {
  previous: () => void;
  like: () => void;
  close: () => void;
}

export function CarouselActions({ previous, like, close }: CarouselActionsProps) {
  return (
    <View style={styles.carouselActions}>
      <IconButton
          icon="arrow-left"
          mode="contained"
          animated={true}
          containerColor={MD3Colors.secondary80}
          iconColor={MD3Colors.secondary50}
          size={32}
          onPress={previous}
        />
        <IconButton
          icon="close"
          mode="contained"
          animated={true}
          containerColor={MD3Colors.neutral80}
          iconColor={MD3Colors.secondary50}
          size={32}
          onPress={close}
        />
        <IconButton
          icon="heart"
          mode="contained"
          animated={true}
          containerColor={MD3Colors.error80}
          iconColor={MD3Colors.error50}
          size={32}
          onPress={like}
        />
      </View>
  );
};


const styles = StyleSheet.create({
  carouselActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CarouselActions;
