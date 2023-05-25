import { ActionButton, CarouselPage } from '@nx-expo-monorepo/ui';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { FactsProps, mapDispatchToProps, mapStateToProps } from './facts.props';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDogFact } from '@nx-expo-monorepo/queries/use-dog-fact';

export function Facts({
  like,
  getFactById,
  viewed,
  getLastViewedFact,
  removeFromViewed,
}: FactsProps) {
  const route = useRoute<RouteProp<{ params: { id: string } }>>();
  const id = useRef<string | undefined>(route.params?.id);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fact, setFact] = useState<{
    id: string;
    content: string;
  }>();

  const { refetch } = useDogFact();

  const onFetchFact = useCallback(() => {
    refetch().then((queryResult) => {
      if (queryResult.data) {
        setFact(queryResult.data);
        viewed(queryResult.data.id, queryResult.data.content);
      }
      setIsLoading(queryResult.isLoading || queryResult.isFetching);
      setIsSuccess(queryResult.isSuccess);
      setIsError(queryResult.isError);
    });
  }, [refetch, viewed]);

  const onLikePress = useCallback(() => {
    if (!fact) return;
    like(fact.id, fact.content);
    onFetchFact();
  }, [fact, like, onFetchFact]);

  const onBackPress = useCallback(() => {
    if (!getLastViewedFact?.content) return;
    setFact(getLastViewedFact);
    removeFromViewed(getLastViewedFact?.id);
  }, [removeFromViewed, getLastViewedFact]);

  useEffect(() => {
    if (id.current) {
      const factForRouteId = getFactById(id.current);
      if (factForRouteId) {
        setFact(factForRouteId);
        viewed(factForRouteId.id, factForRouteId.content);
        id.current = undefined;
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        return;
      }
    }
    onFetchFact();
  }, [id, onFetchFact]);

  const theme = useTheme();

  return (
    <CarouselPage
      testID="facts-page"
      content={fact?.content}
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      onReload={onFetchFact}
    >
      <>
        <ActionButton
          testID="back-button"
          icon="arrow-left"
          containerColor={theme.colors.tertiaryContainer}
          iconColor={theme.colors.tertiary}
          disabled={!getLastViewedFact?.content}
          onPress={onBackPress}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ActionButton
          testID="like-button"
          icon="bone"
          containerColor={theme.colors.errorContainer}
          iconColor={theme.colors.error}
          onPress={onLikePress}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ActionButton
          testID="next-button"
          icon="arrow-right"
          containerColor={theme.colors.primaryContainer}
          iconColor={theme.colors.primary}
          onPress={onFetchFact}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
      </>
    </CarouselPage>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts);
