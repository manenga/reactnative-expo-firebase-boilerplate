import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Wallet from '../../../scenes/wallet'
import Detail from '../../../scenes/details'
import Fund from '../../../scenes/fund'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

// ------------------------------------
// Navigators
// ------------------------------------

export const LoginNavigator = (props) => {
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
      />
    </Stack.Navigator>
  )
}


export const HomeNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen name="Home">
        {props => <Home {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const WalletNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen name="Wallet">
        {props => <Wallet {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name="Fund">
        {props => <Fund {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export const ProfileNavigator = (props) => {
  const user = props.user
  const navigationProps = props.navigationProps
  return (
    <Stack.Navigator headerMode="screen" screenOptions={navigationProps}>
      <Stack.Screen name="Profile">
        {props => <Profile {...props} extraData={user} />}
      </Stack.Screen>
      <Stack.Screen name="Detail">
        {props => <Detail {...props} extraData={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
