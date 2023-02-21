import { ListPage } from '@nx-expo-monorepo/ui';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';
import { AppRoutes } from '../app-routes';

import {
  BookmarksProps,
  mapDispatchToProps,
  mapStateToProps,
} from './bookmarks.props';

export function Bookmarks({ bookmarks, removeBookmark }: BookmarksProps) {
  const route = useRoute<RouteProp<{ params: { edit: boolean } }>>();
  const navigation = useNavigation();
  const edit = route.params?.edit;

  return (
    <ListPage
      items={bookmarks}
      editMode={edit}
      onRemove={removeBookmark}
      onGoToDetails={() => {
        navigation.navigate(AppRoutes.catFacts);
      }}
    ></ListPage>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
