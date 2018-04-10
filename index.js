import React from 'react'
import { AppRegistry } from 'react-native'
import { Text, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Navigator from './Navigator'

Text.defaultProps = {
  allowFontScaling: false,
}

// There you can modify how your app looks like and which colors should be `primary`
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EFEFF4',
  },
}

const Main = () => (
  <PaperProvider theme={theme}>
    <Navigator />
  </PaperProvider>
)

AppRegistry.registerComponent('RNIntroduction', () => Main)
