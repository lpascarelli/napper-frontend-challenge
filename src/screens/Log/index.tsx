import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ActionsBar from '@app/components/Log/ActionsBar';
import Activities from '@app/components/Log/Activities';
import RemovedActivities from '@app/components/Log/RemovedActivities';
import { IActivity } from '@app/interfaces';
import * as activitiesJson from 'activities.json';

export default function Log() {
  const [isSavingMode, setIsSavingMode] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>(
    activitiesJson.activities
  );
  const [removedActivities, setRemovedActivities] = useState<IActivity[]>([]);

  const switchModeHandler = () => {
    setIsSavingMode((prevState) => !prevState);
  };

  const removeActivityByIdHandler = (id: string) => {
    const updatedRemovedActivities = removedActivities;
    const updatedActivities = activities.filter((activity) => {
      if (activity.id === id) {
        updatedRemovedActivities.push(activity);
      } else {
        return activity;
      }
    });

    setActivities(updatedActivities);
    setRemovedActivities(updatedRemovedActivities);
  };

  const addActivityByIdHandler = (id: string) => {
    const updatedActivities = activities;
    const updatedRemovedActivities = removedActivities.filter(
      (removedActivity) => {
        if (removedActivity.id === id) {
          updatedActivities.push(removedActivity);
        } else {
          return removedActivity;
        }
      }
    );

    setActivities(updatedActivities);
    setRemovedActivities(updatedRemovedActivities);
  };

  return (
    <ScrollView style={styles.container}>
      <ActionsBar
        isSavingMode={isSavingMode}
        onSwitchMode={switchModeHandler}
      />
      <RemovedActivities
        isSavingMode={isSavingMode}
        onAddActivity={addActivityByIdHandler}
        removedActivities={removedActivities}
      />
      <Activities
        activities={activities}
        hasRemovedActivities={removedActivities.length > 0}
        isSavingMode={isSavingMode}
        onRemoveActivity={removeActivityByIdHandler}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
