import { ListPage } from '@nx-expo-monorepo/ui';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';

import { AppRoutes } from '../app-routes';
import { RootStackParamList } from '../root-stack-param-list.type';

import {
  BookmarksProps,
  mapDispatchToProps,
  mapStateToProps,
} from './bookmarks.props';

export function Bookmarks({ bookmarks, removeBookmark }: BookmarksProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          icon={edit ? 'check' : 'book-edit'}
          onPress={() => {
            setEdit(!edit);
          }}
        >
          {edit ? 'Done' : 'Edit'}
        </Button>
      ),
    });
  }, [navigation, edit]);

  return (
    <ListPage
      testID="bookmarks-page"
      items={bookmarks}
      editMode={edit}
      onRemove={removeBookmark}
      onGoToDetails={(id: string) => {
        navigation.push(AppRoutes.dogFacts, { id });
      }}
    ></ListPage>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
