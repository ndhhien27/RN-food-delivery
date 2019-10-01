import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './screens/Home'
import Category from './screens/Category'


const AppNavigator = createStackNavigator({
  Home: Home,
  Category: Category
})

export default AppNavigator