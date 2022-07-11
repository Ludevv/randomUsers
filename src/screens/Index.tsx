import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFetch} from '../../lib/hooks/useFetch';
import {useAppNavigation} from '../../App';
import Header from '../components/Header';

const URL = 'https://randomuser.me/api/?results=200';

const IndexScreen = () => {
  const navigation = useAppNavigation();

  const {data: users, isLoading, error} = useFetch(URL);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return <Text>Oops, error, try later</Text>;
  }

  return (
    <View>
      <Header isIndex />
      <Button
        title="Users list"
        onPress={() => navigation.navigate('users', {users})}
      />
      <Button
        title="Randomize user"
        onPress={() => {
          navigation.navigate('user', {
            user: users[Math.floor(Math.random() * users.length)],
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default IndexScreen;
