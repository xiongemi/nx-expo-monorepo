import {
  likesActions,
  LikesEntity,
  likesSelectors,
  RootState,
} from '@nx-expo-monorepo/states/cat';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const mapStateToProps = (state: RootState) => {
  return {
    bookmarks: likesSelectors
      .selectAllLikes(state)
      .map((likes: LikesEntity) => {
        return {
          id: likes.id,
          description: likes.content,
          title: new Date(likes.dateAdded).toLocaleDateString(),
        };
      }),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    removeBookmark(id: string) {
      dispatch(likesActions.remove(id));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type BookmarksProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { BookmarksProps };
