import React from 'react'
import sectionListData from './assets/sectionListData'
import { SectionList, View, Text, StyleSheet } from 'react-native'

class List extends React.Component {
  static navigationOptions = {
    title: 'Section List',
  }

  render() {
    return (
      <SectionList
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
        sections={sectionListData}
      />
    )
  }
}

export default List

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 5,
  },
  item: {
    padding: 5,
  },
})
