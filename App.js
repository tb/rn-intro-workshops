import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

export default class App extends Component {
  static navigationOptions = {
    title: 'Main',
  }

  navigateTo = name => () =>
    this.props.navigation.navigate(name)

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.navigateTo('flatList')} primary raised={true}>
          FlatList
        </Button>

        <Button onPress={this.navigateTo('sectionList')} primary raised={true}>
          SectionList
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
