import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
  const [seletedUuid, setSelectedUuid] = useState<string | undefined>();

  const handleChangeColor = useCallback(
    (id: string) => {
      if (id === seletedUuid) {
        setSelectedUuid(undefined);
      } else {
        setSelectedUuid(id);
      }
    },
    [seletedUuid],
  );

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
            placeholder="Enter phrase..."
          />
        }
        data={users}
        renderItem={({item}) => (
          <ListItem
            item={item}
            handleChangeColor={handleChangeColor}
            style={
              seletedUuid && seletedUuid !== item.login.uuid
                ? styles.oragne
                : styles.gray
            }
          />
        )}
        keyExtractor={item => `random-user-${item?.login.uuid}`}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fdfdfd',
    padding: 15,
    margin: 10,
    marginTop: 20,
    borderRadius: 7,
  },
  flatlist: {
    marginBottom: 150,
  },
  gray: {
    backgroundColor: '#dfdfdf',
  },
  oragne: {
    backgroundColor: '#ffa500',
  },
});

export default UsersScreen;
