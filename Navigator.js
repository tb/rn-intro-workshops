import { TabNavigator } from 'react-navigation'

import App from './App'
import FlatList from './FlatList'
import SectionList from './SectionList'

const Navigator = TabNavigator(
  {
    main: {
      screen: App,
    },
    flatList: {
      screen: FlatList,
    },
    sectionList: {
      screen: SectionList,
    },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
      },
    },
  },
)

export default Navigator
