import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ActionsBar from '@app/components/Log/ActionsBar';
import Activities from '@app/components/Log/Activities';
import { IActivities } from '@app/interfaces';
import * as activitiesJson from 'activities.json';

// import TextButtonTransition from '@app/components/test';

export default function Log() {
  const [isSavingMode, setIsSavingMode] = useState(false);
  const [activities, setActivities] = useState<IActivities[]>(
    activitiesJson.activities
  );

  const switchModeHandler = () => {
    setIsSavingMode((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <ActionsBar
        isSavingMode={isSavingMode}
        onSwitchMode={switchModeHandler}
      />
      <Activities activities={activities} isSavingMode={isSavingMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
