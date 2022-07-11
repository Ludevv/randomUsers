import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenNavigationProps} from '../../App';
import Header from '../components/Header';

type UserProps = ScreenNavigationProps<'user'>;

const UserScreen = (props: UserProps) => {
  const {
    route: {params},
  } = props;

  const {
    picture: {large},
    name: {first, last},
    login: {username},
    location: {street, city, postcode},
  } = params.user || {};

  if (!('user' in params)) {
    <Text>Oops, we can't find this user</Text>;
  }

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image
          source={{
            uri: large,
          }}
          style={styles.stretch}
        />
        <View style={styles.card}>
          <Text style={styles.name}>
            {first} {last}
          </Text>
          <Text>{`Username: ${username}`}</Text>
          <Text>{`Adress: ${street.name} ${street.number}`}</Text>
          <Text>{`City: ${postcode} ${city}`}</Text>
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
});

export default UserScreen;
