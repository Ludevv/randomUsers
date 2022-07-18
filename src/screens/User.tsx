import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenNavigationProps} from '../../App';
import Header from '../components/Header';
import ErrorScreen from './Error';

type UserProps = ScreenNavigationProps<'user'>;

const UserScreen = (props: UserProps) => {
  const {
    route: {
      params: {user},
    },
  } = props;

  const {picture, name, login, location} = user || {};

  if (
    !picture?.large ||
    !name?.first ||
    !name?.last ||
    !login?.username ||
    !location?.city ||
    !location?.street ||
    !location?.postcode ||
    !location.street?.name ||
    !location.street?.number
  ) {
    return <ErrorScreen title="Oops, we can't find this user! :(" />;
  }

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image
          source={{
            uri: picture.large,
          }}
          style={styles.stretch}
        />
        <View style={styles.card}>
          <Text style={styles.name}>
            {name.first} {name.last}
          </Text>
          <Text>{`Username: ${login.username}`}</Text>
          <Text>{`Adress: ${location.street.name} ${location.street.number}`}</Text>
          <Text>{`City: ${location.postcode} ${location.city}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  stretch: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  card: {
    marginTop: 20,
    backgroundColor: '#dfdfdf',
    width: '80%',
    borderRadius: 10,
    padding: 15,
  },
  name: {
    textAlign: 'center',
    fontSize: 25,
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  error: {
    paddingTop: 80,
    color: 'red',
    fontSize: 19,
  },
});

export default UserScreen;
