import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useFetch} from '../../lib/hooks/useFetch';
import {useAppNavigation} from '../../App';
import Header from '../components/Header';
import Button from '../components/Button';
import ErrorScreen from './Error';
import LoadingScreen from './Loading';

const URL = 'https://randomuser.me/api/?results=200';

const IndexScreen = () => {
  const navigation = useAppNavigation();

  const {data: users, isLoading, error} = useFetch(URL);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen title="Oops, error during download data, try later!" />;
  }

  return (
    <View>
      <Header isIndex />
      <View style={styles.box}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: '85%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#574ae2',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
    borderRadius: 8,
  },
  textButton: {
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    color: '#fff',
    fontSize: 20,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    color: 'red',
    fontSize: 16,
  },
});

export default IndexScreen;
