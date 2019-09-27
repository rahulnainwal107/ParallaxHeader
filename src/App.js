// @flow
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  Menu,
  TvShow,
  BasicUsage,
  ColorsPage,
  Avignon,
  PullToRefresh
} from "./Pages";

export const App = createStackNavigator(
  {
    menu: {
      screen: Menu,
    },
    tvShow: {
      screen: TvShow,
      navigationOptions: {
        headerTransparent: true,
        headerTintColor: "white"
      }
    },
    basicUsage: {
      screen: BasicUsage
    },
    colors: {
      screen: ColorsPage
    },
    avignon: {
      screen: Avignon
    },
    pullrefresh: {
      screen: PullToRefresh
    }
  },
  {
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: 'white'
    }
  }
);

export default createAppContainer(App);
