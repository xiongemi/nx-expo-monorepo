import React from 'react';
import { Divider, List, MD3Colors } from 'react-native-paper';
import Spacing from '../spacing/spacing';
import { View } from 'react-native';

export interface ListPageProps {
  title?: string;
  editMode: boolean;
  items: {
    id: string;
    title?: string;
    description: string;
  }[];
  onRemove: (id: string) => void;
  onGoToDetails: (id: string) => void;
  testID?: string;
}

export function ListPage({
  title,
  editMode,
  items,
  onRemove,
  onGoToDetails,
  testID,
}: ListPageProps) {
  return (
    <Spacing testID={testID}>
      <List.Section title={title}>
        {items.map((item) => (
          <View key={item.id}>
            <List.Item
              title={item.title}
              description={item.description}
              left={() =>
                editMode && (
                  <List.Icon color={MD3Colors.error50} icon="minus-circle" />
                )
              }
              right={(props) =>
                !editMode && <List.Icon {...props} icon="chevron-right" />
              }
              onPress={() =>
                editMode ? onRemove(item.id) : onGoToDetails(item.id)
              }
            />
            <Divider />
          </View>
        ))}
      </List.Section>
    </Spacing>
  );
}

export default ListPage;
