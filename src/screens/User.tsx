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
      <Image
        source={{
          uri: large,
        }}
        style={styles.stretch}
      />
      <Text>
        {first} {last}
      </Text>
      <Text>{username}</Text>
      <View>
        <View style={styles.row}>
          <Text>{street.name} </Text>
          <Text>{street.number}</Text>
        </View>
        <View style={styles.row}>
          <Text> {postcode}</Text>
          <Text> {city} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default UserScreen;
