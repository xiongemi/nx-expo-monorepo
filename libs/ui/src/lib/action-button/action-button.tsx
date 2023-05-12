import { AsyncComponentProps } from '@nx-expo-monorepo/models';
import React from 'react';

import { IconButton } from 'react-native-paper';

export interface ActionButtonProps extends AsyncComponentProps {
  icon: string;
  containerColor: string;
  iconColor: string;
  onPress: () => void;
  testID?: string;
}

export function ActionButton(props: ActionButtonProps) {
  return (
    <IconButton
      testID={props.testID}
      mode="contained"
      animated={true}
      size={32}
      disabled={props.isLoading}
      icon={props.isLoading ? 'loading' : props.icon}
      iconColor={props.iconColor}
      containerColor={props.containerColor}
      onPress={props.onPress}
    />
  );
}

export default ActionButton;
