import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile212241Navigator from '../features/UserProfile212241/navigator';
import Maps212222Navigator from '../features/Maps212222/navigator';
import Settings212200Navigator from '../features/Settings212200/navigator';
import Settings212185Navigator from '../features/Settings212185/navigator';
import NotificationList212184Navigator from '../features/NotificationList212184/navigator';
import Maps212183Navigator from '../features/Maps212183/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile212241: { screen: UserProfile212241Navigator },
Maps212222: { screen: Maps212222Navigator },
Settings212200: { screen: Settings212200Navigator },
Settings212185: { screen: Settings212185Navigator },
NotificationList212184: { screen: NotificationList212184Navigator },
Maps212183: { screen: Maps212183Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
