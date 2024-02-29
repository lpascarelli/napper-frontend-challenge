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
  onRemoveActivity: (id: string) => void;
}

export default function Activities({
  activities,
  isSavingMode,
  onRemoveActivity,
}: ActivitiesProps) {
  const opacity = useSharedValue(0);
  const animatedText = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });

  opacity.value = isSavingMode ? 1 : 0;

  const activitiesUI = activities.map((item) => (
    <Activity
      key={item.id}
      activity={item}
      isSavingMode={isSavingMode}
      onRemoveActivity={onRemoveActivity}
    />
  ));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedText]}>
        Your categories
      </Animated.Text>
      <View style={styles.activityContainer}>{activitiesUI}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
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
