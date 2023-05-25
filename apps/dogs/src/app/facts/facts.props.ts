import {
  likesActions,
  LikesEntity,
  likesSelectors,
  RootState,
  viewedFactsActions,
  ViewedFactsEntity,
  viewFactsSelectors,
} from '@nx-expo-monorepo/states/cat';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const mapStateToProps = (state: RootState) => {
  return {
    getFactById: (id: string) => likesSelectors.getLikeById(id)(state),
    getLastViewedFact: viewFactsSelectors.getLastViewedFact(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    like(id: string, content: string) {
      dispatch(
        likesActions.like({
          id,
          content,
          dateAdded: Date.now(),
        } as LikesEntity)
      );
    },
    viewed(id: string, content: string) {
      dispatch(
        viewedFactsActions.add({
          id,
          content,
        } as ViewedFactsEntity)
      );
    },
    removeFromViewed(id: string) {
      dispatch(viewedFactsActions.remove(id));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type FactsProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { FactsProps };
