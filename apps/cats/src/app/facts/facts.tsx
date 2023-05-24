import { useCatFact } from '@nx-expo-monorepo/queries/use-cat-fact';
import { ActionButton, CarouselPage } from '@nx-expo-monorepo/ui';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MD3Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import { FactsProps, mapDispatchToProps, mapStateToProps } from './facts.props';
import { RouteProp, useRoute } from '@react-navigation/native';

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
  const [fact, setFact] = useState<string | undefined>(undefined);

  const { refetch } = useCatFact();

  const onFetchFact = useCallback(() => {
    refetch().then((queryResult) => {
      if (queryResult.data) {
        setFact(queryResult.data);
        viewed(queryResult.data);
      }
      setIsLoading(queryResult.isLoading || queryResult.isFetching);
      setIsSuccess(queryResult.isSuccess);
      setIsError(queryResult.isError);
    });
  }, [refetch, viewed]);

  const onLikePress = useCallback(() => {
    if (!fact) return;
    like(fact);
    onFetchFact();
  }, [fact, like, onFetchFact]);

  const onBackPress = useCallback(() => {
    if (!getLastViewedFact?.content) return;
    setFact(getLastViewedFact?.content);
    removeFromViewed(getLastViewedFact?.id);
  }, [removeFromViewed, getLastViewedFact]);

  useEffect(() => {
    if (id.current) {
      const content = getFactById(id.current)?.content;
      if (!content) {
        setFact(content);
        id.current = undefined;
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        return;
      }
    }
    onFetchFact();
  }, [id, onFetchFact, getFactById]);

  return (
    <CarouselPage
      testID="facts-page"
      content={fact}
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      onReload={onFetchFact}
    >
      <>
        <ActionButton
          testID="back-button"
          icon="arrow-left"
          containerColor={MD3Colors.secondary80}
          iconColor={MD3Colors.secondary50}
          disabled={!getLastViewedFact?.content}
          onPress={onBackPress}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ActionButton
          testID="like-button"
          icon="lightbulb"
          containerColor={MD3Colors.error80}
          iconColor={MD3Colors.error50}
          onPress={onLikePress}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ActionButton
          testID="next-button"
          icon="close"
          containerColor={MD3Colors.primary80}
          iconColor={MD3Colors.primary50}
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
