import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: TouchableOpacityProps['onPress'];
};

const Button = (props: ButtonProps) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Button;
