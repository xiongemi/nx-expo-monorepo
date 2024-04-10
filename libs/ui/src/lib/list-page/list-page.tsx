import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import Spacing from '../spacing/spacing';
import { ScrollView, StyleSheet, View } from 'react-native';

export interface ListPageProps {
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
  editMode,
  items,
  onRemove,
  onGoToDetails,
  testID,
}: ListPageProps) {
  return (
    <Spacing testID={testID}>
      <ScrollView>
        <View style={styles.grid}>
          {items.map((item) => (
            <Card
              key={item.id}
              style={styles.item}
              onPress={() => onGoToDetails(item.id)}
            >
              <Card.Title title={item.title} />
              <Card.Content>
                <Text variant="bodyLarge">
                  {item.description.slice(0, 80)}...
                </Text>
              </Card.Content>
              {editMode && (
                <Card.Actions>
                  <Button onPress={() => onRemove(item.id)}>Delete</Button>
                </Card.Actions>
              )}
            </Card>
          ))}
        </View>
      </ScrollView>
    </Spacing>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  item: {
    width: '48%',
    margin: 2,
  },
});

export default ListPage;
