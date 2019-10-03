import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './screens/Home'
import Category from './screens/Category'
import CartScreen from './screens/CartScreen'

const CartStack = createStackNavigator({
  Cart: CartScreen
})

const HomeStack = createStackNavigator({
  Home: Home,
  Category: Category
})

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Cart: CartStack
})


// const AppNavigator = createStackNavigator({
//   Main: TabNavigator
// })

export default AppNavigator