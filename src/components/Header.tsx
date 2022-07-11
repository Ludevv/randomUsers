import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '../../App';

const Header = ({isIndex}: {isIndex?: boolean}) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.header}>
      {!isIndex && (
        <TouchableOpacity
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('index')
          }>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: 'green',
  },
});

export default Header;
