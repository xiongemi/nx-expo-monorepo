import { ListPage } from '@nx-expo-monorepo/ui';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import { AppRoutes } from '../app-routes';
import { RootStackParamList } from '../root-stack-param-list.type';

import {
  BookmarksProps,
  mapDispatchToProps,
  mapStateToProps,
} from './bookmarks.props';

export function Bookmarks({ bookmarks, removeBookmark }: BookmarksProps) {
  const route = useRoute<RouteProp<{ params: { edit: boolean } }>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const edit = route.params?.edit;

  return (
    <ListPage
      items={bookmarks}
      editMode={edit}
      onRemove={removeBookmark}
      onGoToDetails={() => {
        navigation.push(AppRoutes.catFacts);
      }}
    ></ListPage>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
