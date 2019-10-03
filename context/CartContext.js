import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'

export const CartContext = createContext();

export default function CartProvider(props) {

  const [cart, setCart] = useState([])

  const storeCart = async (newCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify([...newCart]))
    } catch (error) {
      console.log(error)
    }
  }

  const loadCart = async () => {
    try {
      const value = await AsyncStorage.getItem('cart')
      const parsedValue = JSON.parse(value)
      setCart(prevCart => {
        return parsedValue || [];
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadCart()
  }, [])


  const addFoodToCart = (food) => {
    setCart(prevCart => {
      let afterCart = [];
      if (!prevCart.find(item => item.foodId === food._id)) {
        afterCart = [
          ...prevCart,
          {
            foodId: food._id,
            qty: 1
          }
        ]
      }
      else {
        afterCart = prevCart.map(item =>
          item.foodId !== food._id ? { ...item } : { ...item, qty: item.qty + 1 })
      }
      storeCart(afterCart);
      return afterCart
    })
  }



  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addFoodToCart: addFoodToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
