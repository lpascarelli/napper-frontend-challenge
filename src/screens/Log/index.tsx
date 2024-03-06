import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { instance } from '@app/axios';
import ActionsBar from '@app/components/Log/ActionsBar';
import Activities from '@app/components/Log/Activities';
import AddCategory from '@app/components/Log/AddCategory';
import RemovedActivities from '@app/components/Log/RemovedActivities';
import { IActivity } from '@app/interfaces';

export default function Log() {
  const [isSavingMode, setIsSavingMode] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [removedActivities, setRemovedActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      if (!isAdding) {
        try {
          const { data } = await instance.get('/categories');

          setActivities(data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchCategories();
  }, [isAdding]);

  const switchModeHandler = () => {
    setIsSavingMode((prevState) => !prevState);
  };

  const isAddingHandler = (isAddingMode: boolean) => {
    setIsAdding(isAddingMode);
  };

  const addCategoryHandler = async (enteredTitle: string) => {
    try {
      const response = await instance.post('/categories', {
        id: new Date().toISOString(),
        title: enteredTitle,
      });

      if (response.status === 200 || response.status === 201) {
        setIsAdding(false);
      }
    } catch (error) {
      console.log(error);
    }
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

  const logContentUI = isAdding ? (
    <AddCategory onAddCategory={addCategoryHandler} />
  ) : (
    <>
      <ActionsBar
        isSavingMode={isSavingMode}
        onSwitchMode={switchModeHandler}
        onAddingMode={isAddingHandler}
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
    </>
  );

  return <ScrollView style={styles.container}>{logContentUI}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
