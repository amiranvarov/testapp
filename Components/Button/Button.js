import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const Button = ({ onPress, label, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.Wrapper, style]}>
    <Text style={styles.Label}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: `#fff`,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    elevation: 3
  },
  Label: {
    fontSize: 18
  }
});

export default Button;
