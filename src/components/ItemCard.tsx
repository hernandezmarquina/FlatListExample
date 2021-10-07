import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ItemCardProps {
  item: Item;
  maxWidth?: number;
  maxHeight?: number;
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <View
      style={[
        styles.content,
        {maxWidth: props.maxWidth, maxHeight: props.maxHeight},
      ]}>
      <Image style={styles.image} source={{uri: props.item.image}} />
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.description}>{props.item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 4,
    paddingBottom: 16,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F0f0f0',
  },
  image: {
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: 8,
  },
  description: {
    color: 'gray',
    margin: 8,
  },
});

export default ItemCard;
