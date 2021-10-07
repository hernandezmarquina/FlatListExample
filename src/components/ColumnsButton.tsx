import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ColumnsButtonProps {
  active: boolean;
  name: string;
  onPress: () => void;
}

const ColumnsButton = (props: ColumnsButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: props.active ? '#17A1D5' : 'gray'},
      ]}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColumnsButton;
