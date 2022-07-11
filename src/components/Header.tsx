import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '../../App';

const Header = ({isIndex}: {isIndex?: boolean}) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.header}>
      {!isIndex && (
        <TouchableOpacity
          hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('index')
          }>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      )}
      {isIndex && <Text style={styles.title}>Random Users</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#001d66',
    paddingBottom: 20,
  },
  back: {
    marginLeft: 20,
    color: 'white',
    fontSize: 16,
  },
  title: {
    width: '100%',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
