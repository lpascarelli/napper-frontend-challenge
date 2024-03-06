import { StyleSheet, View, Text } from 'react-native';

import Button from '@app/components/UI/Button';
import { ButtonVariant } from '@app/types';

interface ActionsBarProps {
  isSavingMode: boolean;
  onAddingMode: (isAddingMode: boolean) => void;
  onSwitchMode: () => void;
}

export default function ActionsBar({
  isSavingMode,
  onAddingMode,
  onSwitchMode,
}: ActionsBarProps) {
  const text = isSavingMode ? 'Edit quick categories' : 'Track';
  const title = isSavingMode ? 'Save' : 'Edit';
  const variantButton: ButtonVariant = isSavingMode ? 'solid' : 'outline';

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Text style={styles.text}>{text}</Text>
        <Button title={title} onPress={onSwitchMode} variant={variantButton} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Add category'
          onPress={() => onAddingMode(true)}
          variant='solid'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 62,
    flexDirection: 'column',
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  add: {
    textAlign: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#C1C1EA',
  },
  buttonContainer: {
    marginVertical: 16,
  },
});
