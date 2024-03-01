import { IActivity } from '@app/interfaces';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import RemovedActivity from '@app/components/Log/RemovedActivities/RemovedActivity';

interface RemovedActivitiesProps {
  removedActivities: IActivity[];
  isSavingMode: boolean;
  onAddActivity: (id: string) => void;
}

export default function RemovedActivitiesProps({
  removedActivities,
  isSavingMode,
  onAddActivity,
}: RemovedActivitiesProps) {
  const opacity = useSharedValue(0);
  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });

  const removedActivitiesUI = removedActivities.map((removedActivity) => (
    <RemovedActivity
      id={removedActivity.id}
      key={removedActivity.id}
      onAddActivity={onAddActivity}
    />
  ));

  opacity.value = isSavingMode && removedActivities.length > 0 ? 1 : 0;

  return (
    <Animated.View style={[styles.container, animatedOpacity]}>
      <Text style={styles.text}>Deleted categories</Text>
      <View style={styles.removedActivitiesContainer}>
        {removedActivitiesUI}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 0,
    marginTop: 40,
  },
  removedActivitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 12,
  },
});
