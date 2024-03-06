import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Button from '@app/components/UI/Button';

interface AddCategoryProps {
  onAddCategory: (enteredTitle: string) => void;
}

export default function AddCategory({ onAddCategory }: AddCategoryProps) {
  const [title, setTitle] = useState('');

  const changeTitleHandler = (title: string) => {
    setTitle(title);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.title} onChangeText={changeTitleHandler} />
      <Button
        title='Add'
        onPress={() => onAddCategory(title)}
        variant='solid'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 124,
  },
  title: {
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
  },
});
