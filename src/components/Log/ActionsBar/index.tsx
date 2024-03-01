import { StyleSheet, View, Text } from 'react-native';

import Button from '@app/components/UI/Button';
import { ButtonVariant } from '@app/types';

interface ActionsBarProps {
  isSavingMode: boolean;
  onSwitchMode: () => void;
}

export default function ActionsBar({
  isSavingMode,
  onSwitchMode,
}: ActionsBarProps) {
  const text = isSavingMode ? 'Edit quick categories' : 'Track';
  const title = isSavingMode ? 'Save' : 'Edit';
  const variantButton: ButtonVariant = isSavingMode ? 'solid' : 'outline';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button title={title} onPress={onSwitchMode} variant={variantButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 62,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#C1C1EA',
  },
});
