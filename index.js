import React from 'react'
import { AppRegistry, Text, TextInput } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import App from './App'

Text.defaultProps = {
  allowFontScaling: false,
}

TextInput.defaultProps = {
  allowFontScaling: false,
}

// There you can modify how your app looks like and which colors should be `primary`
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

const Main = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
)

AppRegistry.registerComponent('RNIntroduction', () => Main)
