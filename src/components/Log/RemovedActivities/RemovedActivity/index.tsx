import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { xml as plus } from '@app/assets/plus';
import { xml as medicine } from '@app/assets/medicine';

export default function RemovedActivity() {
  return (
    <View style={styles.container}>
      <View style={styles.plusIcon}>
        <SvgXml xml={plus} />
      </View>
      <SvgXml xml={medicine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 68,
    backgroundColor: '#8F91FF1C',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    position: 'absolute',
    left: 43,
    top: -4,
  },
});
