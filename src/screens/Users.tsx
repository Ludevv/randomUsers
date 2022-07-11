import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenNavigationProps} from '../../App';
import ListItem from '../components/ListItem';
import Header from '../components/Header';

type UsersProps = ScreenNavigationProps<'users'>;

const UsersScreen = (props: UsersProps) => {
  const {
    route: {params},
  } = props;

  const [searchPhrase, setSearchPhrase] = useState('');

  const [users, setUsers] = useState(params.users);

  useEffect(() => {
    const filteredUsers = params.users.filter(
      ({name, location}) =>
        name.first.includes(searchPhrase) ||
        location.city.includes(searchPhrase),
    );

    setUsers(filteredUsers);
  }, [params.users, searchPhrase]);

  return (
    <View>
      <Header />
      <FlatList
        ListHeaderComponent={
          <TextInput
            style={styles.input}
            value={searchPhrase}
            onChangeText={setSearchPhrase}
          />
        }
        data={users}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => `random-user-${item?.login.uuid}`}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
  },
  flatlist: {
    marginBottom: 150,
  },
});

export default UsersScreen;
