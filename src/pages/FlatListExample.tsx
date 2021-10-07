import React, {useState} from 'react';
import {SafeAreaView, FlatList, useWindowDimensions, View} from 'react-native';
import ColumnsButton from '../components/ColumnsButton';
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

interface FlatListExampleState {
  type: string;
  numColumns: number;
  itemMaxWidth: number;
}

const FlatListExample = () => {
  const screenWidth = useWindowDimensions().width;
  const itemMargin = 8; // 4 izquierda y 4 de la derecha

  const setColumns = (numColumns: number): FlatListExampleState => {
    const totalMargin = itemMargin * numColumns;
    return {
      type: numColumns === 1 ? 'Lista' : 'Mosaico',
      numColumns: numColumns,
      itemMaxWidth: (screenWidth - totalMargin) / numColumns,
    };
  };

  const [state, setState] = useState<FlatListExampleState>(setColumns(1));

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <ColumnsButton
          active={state.type === 'Lista'}
          name={'Lista'}
          onPress={() => {
            setState(setColumns(1));
          }}
        />
        <ColumnsButton
          active={state.type === 'Mosaico'}
          name={'Mosaico'}
          onPress={() => {
            setState(setColumns(2));
          }}
        />
      </View>
      <FlatList
        key={state.type}
        data={items}
        horizontal={false}
        numColumns={state.numColumns}
        renderItem={data => (
          <ItemCard item={data.item} maxWidth={state.itemMaxWidth} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FlatListExample;
