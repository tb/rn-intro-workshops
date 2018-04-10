import React from 'react'
import flatListData from './assets/flatListData'
import { FlatList, View, Text, StyleSheet } from 'react-native'

class List extends React.Component {
  static navigationOptions = {
    title: 'Flat List',
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={flatListData}
        keyExtractor={({ id }) => id}
        numColumns={2}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    )
  }
}

export default List

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    padding: 5,
  },
})
