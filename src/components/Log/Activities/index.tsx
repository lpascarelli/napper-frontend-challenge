import { ScrollView, StyleSheet } from 'react-native';

import Activity from '@app/components/Log/Activities/Activity';
import { IActivities } from '@app/interfaces';

interface ActivitiesProps {
  activities: IActivities[];
  isSavingMode: boolean;
}

export default function Activities({
  activities,
  isSavingMode,
}: ActivitiesProps) {
  const activitiesUI = activities.map((item) => (
    <Activity
      key={item.id}
      title={item.title}
      description={item.description}
      isSavingMode={isSavingMode}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {activitiesUI}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
});
