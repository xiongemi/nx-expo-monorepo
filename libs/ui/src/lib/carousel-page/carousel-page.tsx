import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import {
  CarouselActions,
  CarouselActionsProps,
} from '../carousel-actions/carousel-actions';
import { Carousel, CarouselProps } from '../carousel/carousel';

export interface CarouselPageProps extends CarouselActionsProps, CarouselProps {
  testID?: string;
}

export function CarouselPage(props: CarouselPageProps) {
  return (
    <SafeAreaView testID={props.testID} style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.carousel}
        testID="carousel-scroll-view"
        centerContent={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Carousel {...props} />
      </ScrollView>
      <View style={styles.carouselActions}>
        <CarouselActions {...props} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    height: '100%',
  },
  carousel: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    display: 'flex',
  },
  carouselActions: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
});

export default CarouselPage;
