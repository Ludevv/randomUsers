import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacityProps,
} from 'react-native';
import {useAppNavigation} from '../../App';
import {UserType} from '../../lib/@types';

type ListItemProps = {
  item: UserType;
  handleChangeColor: (id: string) => void;
  style?: TouchableOpacityProps['style'];
};

const ListItem = (props: ListItemProps) => {
  const {item, handleChangeColor, style} = props;
  const {picture, name, location, email, login} = item;

  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('user', {user: item})}
      style={[styles.container, style]}>
      <Image
        source={{
          uri: picture.thumbnail,
        }}
        style={styles.stretch}
      />
      <View>
        <Text style={styles.name}>
          {name.first} {name.last}
        </Text>
        <Text>{`City: ${location.city}`}</Text>
        <Text>{`Email: ${email}`}</Text>
      </View>
      <Pressable
        onPress={() => handleChangeColor(login.uuid)}
        hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
        style={styles.orange}>
        <Text style={styles.select}>Change colors!</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
    marginTop: 7,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
    marginRight: 12,
  },
  orange: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  select: {
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});

export default ListItem;
