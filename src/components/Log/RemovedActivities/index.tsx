import { IActivity } from '@app/interfaces';
import { View, Text, StyleSheet } from 'react-native';

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
  const removedActivitiesUI = removedActivities.map((removedActivity) => (
    <RemovedActivity key={removedActivity.id} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deleted categories</Text>
      <View style={styles.removedActivitiesContainer}>
        {removedActivitiesUI}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
