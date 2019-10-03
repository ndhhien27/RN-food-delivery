import React, { useContext } from 'react'
import { Text, FlatList, View } from 'react-native'

import { CartContext } from '../context/CartContext'

function CartScreen() {

  const { cart } = useContext(CartContext)
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) =>
        <View>
          <Text>{item.foodId}</Text>
          <Text>{item.qty}</Text>
        </View>
      }
      keyExtractor={item => `item${item.foodId}`}
    />
  )
}

CartScreen.navigationOptions = ({ navigation }) => ({
  title: 'Cart'
})

export default CartScreen