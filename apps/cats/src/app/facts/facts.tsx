import { useCatFact } from '@nx-expo-monorepo/queries/use-cat-fact';
import { ActionButton, CarouselPage } from '@nx-expo-monorepo/ui';
import React, { useCallback } from 'react';
import { MD3Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { FactsProps, mapDispatchToProps } from './facts.props';

export function Facts({ like }: FactsProps) {
  const { data, isLoading, isSuccess, isError, refetch, isFetching } =
    useCatFact();

  const onLikePress = useCallback(() => {
    if (!data) return;
    like({
      id: uuidv4(),
      content: data,
      dateAdded: Date.now(),
    });
    refetch();
  }, [data, like, refetch]);

  return (
    <CarouselPage
      content={data}
      isLoading={isLoading || isFetching}
      isSuccess={isSuccess}
      isError={isError}
      onReload={refetch}
    >
      <>
        <ActionButton
          icon="arrow-left"
          containerColor={MD3Colors.secondary80}
          iconColor={MD3Colors.secondary50}
          onPress={refetch}
          isLoading={isLoading || isFetching}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ActionButton
          icon="lightbulb"
          containerColor={MD3Colors.error80}
          iconColor={MD3Colors.error50}
          onPress={onLikePress}
          isLoading={isLoading || isFetching}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ActionButton
          icon="close"
          containerColor={MD3Colors.primary80}
          iconColor={MD3Colors.primary50}
          onPress={refetch}
          isLoading={isLoading || isFetching}
          isSuccess={isSuccess}
          isError={isError}
        />
      </>
    </CarouselPage>
  );
}

export default connect(null, mapDispatchToProps)(Facts);
