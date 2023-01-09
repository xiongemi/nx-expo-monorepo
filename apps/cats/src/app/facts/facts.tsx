import { useCatFact } from '@nx-expo-monorepo/queries/use-cat-fact';
import { ActionButton, CarouselPage } from '@nx-expo-monorepo/ui';
import React from 'react';
import { MD3Colors } from 'react-native-paper';

export function Facts() {
  const { data, isLoading, isSuccess, isError, refetch, isFetching } =
    useCatFact();

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
          onPress={refetch}
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

export default Facts;
