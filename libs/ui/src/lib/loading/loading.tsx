import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import Centre from '../centre/centre';
import Spacing from '../spacing/spacing';

export function Loading() {
  return (
    <Centre>
      <Spacing>
        <ActivityIndicator animating={true} size="large" children={undefined} />
      </Spacing>
    </Centre>
  );
}

export default Loading;
