import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Header from '../components/Header';

const ErrorScreen = ({title}: {title: string}) => (
  <View>
    <Header />
    <View style={styles.box}>
      <Text style={styles.error}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  box: {
    height: '85%',
    alignItems: 'center',
    paddingTop: 80,
  },
  error: {
    color: 'red',
    fontSize: 19,
  },
});

export default ErrorScreen;
