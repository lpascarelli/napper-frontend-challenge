import { StyleSheet, View, Text } from 'react-native';

import Button from '@app/components/UI/Button';
import { EDIT_CATEGORIES, TRACK, SAVE, EDIT } from '@app/constants';
import { ButtonVariant } from '@app/types';

interface ActionsBarProps {
  isSavingMode: boolean;
  onSwitchMode: () => void;
}

export default function ActionsBar({
  isSavingMode,
  onSwitchMode,
}: ActionsBarProps) {
  const text = isSavingMode ? EDIT_CATEGORIES : TRACK;
  const title = isSavingMode ? SAVE : EDIT;
  const variantButton: ButtonVariant = isSavingMode ? 'solid' : 'outline';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button variant={variantButton} onPress={onSwitchMode} title={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 74,
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
