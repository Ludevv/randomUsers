import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingScreen = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Random Users</Text>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  box: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d66',
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginBottom: 50,
  },
});

export default LoadingScreen;
