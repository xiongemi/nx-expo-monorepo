import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export const Spacing = ({ children }: { children: ReactNode }) => {
  return <View style={styles.spacing}>{children}</View>;
};

const styles = StyleSheet.create({
  spacing: {
    margin: 10,
  },
});

export default Spacing;
