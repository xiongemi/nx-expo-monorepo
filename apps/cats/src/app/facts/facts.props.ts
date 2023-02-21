import { likesActions, LikesEntity, RootState } from '@nx-expo-monorepo/states/cat';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    like(item: LikesEntity) {
      dispatch(likesActions.like(item));
    },
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type FactsProps = mapDispatchToPropsType;

export { mapDispatchToProps };
export type { FactsProps };
