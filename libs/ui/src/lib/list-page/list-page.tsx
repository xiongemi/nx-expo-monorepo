import React from 'react';
import { Divider, List, MD3Colors } from 'react-native-paper';
import Spacing from '../spacing/spacing';

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
}

export function ListPage({
  title,
  editMode,
  items,
  onRemove,
  onGoToDetails,
}: ListPageProps) {
  return (
    <Spacing>
      <List.Section title={title}>
        {items.map((item) => (
          <List.Item
            key={item.id}
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
        ))}
      </List.Section>
    </Spacing>
  );
}

export default ListPage;
