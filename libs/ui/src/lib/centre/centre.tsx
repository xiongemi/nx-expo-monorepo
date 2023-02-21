import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export const Centre = ({ children }: { children: ReactNode }) => {
  return <View style={styles.center}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Centre;
