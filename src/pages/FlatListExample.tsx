import React from 'react';
import {SafeAreaView, FlatList, useWindowDimensions} from 'react-native';
import ItemCard, {Item} from '../components/ItemCard';

const items: Item[] = [
  {
    id: '1',
    title: 'Ut labore',
    description: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: 'https://picsum.photos/300/200',
  },
  {
    id: '2',
    title: 'Labore et dolore',
    description: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: 'https://picsum.photos/300/200',
  },
  {
    id: '3',
    title: 'Labore et dolore',
    description: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: 'https://picsum.photos/300/200',
  },
  {
    id: '4',
    title: 'Labore et dolore',
    description: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: 'https://picsum.photos/300/200',
  },
  {
    id: '5',
    title: 'Labore et dolore',
    description: 'ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: 'https://picsum.photos/300/200',
  },
];

const FlatListExample = () => {
  const numColumns = 3;
  const margin = 4 * 2 * numColumns;
  const maxWidth = (useWindowDimensions().width - margin) / numColumns;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={items}
        horizontal={false}
        numColumns={numColumns}
        renderItem={data => <ItemCard item={data.item} maxWidth={maxWidth} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FlatListExample;
