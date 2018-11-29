import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Card = ({ number }) => (
  <View style={styles.Wrapper}>
    <Text style={styles.Text}>{number}</Text>
  </View>
);

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    display: 'flex',
    height: '90%',
    width: '100%',
    elevation: 1,
  },
  Text: {
    fontSize: 56
  },
});

export default Card
