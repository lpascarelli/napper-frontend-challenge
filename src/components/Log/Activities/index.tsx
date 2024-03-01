import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Activity from '@app/components/Log/Activities/Activity';
import { IActivity } from '@app/interfaces';

interface ActivitiesProps {
  activities: IActivity[];
  isSavingMode: boolean;
  hasRemovedActivities: boolean;
  onRemoveActivity: (id: string) => void;
}

export default function Activities({
  activities,
  isSavingMode,
  hasRemovedActivities,
  onRemoveActivity,
}: ActivitiesProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);
  const animatedText = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });
  const animatedContainer = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  if (isSavingMode && hasRemovedActivities) {
    opacity.value = 1;
    translateY.value = withTiming(169, {
      duration: 500,
    });
  } else {
    opacity.value = 0;
    translateY.value = withTiming(0, {
      duration: 500,
    });
  }

  const activitiesUI = activities.map((item) => (
    <Activity
      activity={item}
      isSavingMode={isSavingMode}
      key={item.id}
      onRemoveActivity={onRemoveActivity}
    />
  ));

  return (
    <Animated.View style={[styles.container, animatedContainer]}>
      <Animated.Text style={[styles.text, animatedText]}>
        Your categories
      </Animated.Text>
      <View style={styles.activityContainer}>{activitiesUI}</View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 132,
  },
  activityContainer: {
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
