import React from 'react';
import {Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useAppNavigation} from '../../App';
import {UserType} from '../../lib/@types';

type ListItemProps = {
  item: UserType;
};

const ListItem = (props: ListItemProps) => {
  const {picture, name, location, email} = props.item;

  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('user', {user: props.item})}>
      <Image
        source={{
          uri: picture.thumbnail,
        }}
        style={styles.stretch}
      />
      <Text>
        {name.first} {name.last}
      </Text>
      <Text>{location.city}</Text>
      <Text>{email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default ListItem;
