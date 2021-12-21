import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator, WalletNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = (props) => {
  const { user } = props
  const { navigationProps } = props
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return (
                <FontIcon
                  name="home"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            case 'Wallet':
              return (
                <FontIcon
                  name="wallet"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            case 'Profile':
              return (
                <FontIcon
                  name="user"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            default:
              return <View />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
      }}
      initialRouteName="Home"
      swipeEnabled={false}
    >
      <Tab.Screen
        name="Home"
        children={() => <HomeNavigator user={user} navigationProps={navigationProps} />}
      />
      <Tab.Screen
        name="Wallet"
        children={() => <WalletNavigator user={user} navigationProps={navigationProps} />}
      />
      <Tab.Screen
        name="Profile"
        children={() => <ProfileNavigator user={user} navigationProps={navigationProps} />}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
