import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import axios from 'axios'

import FoodItem from '../components/FoodItem'

function Category(props) {

  const { navigation } = props

  const categoryId = navigation.getParam('categoryId')

  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetchFood()
  }, [])

  const fetchFood = () => {
    axios({
      url: 'http://localhost:8080/graphql',
      method: 'post',
      data: {
        query: `
          query FoodByCategory($categoryId: ID!) {
            foodByCategory(categoryId: $categoryId){
              _id
              title
              price
            }
          }
        `,
        variables: {
          categoryId: categoryId
        }
      }
    }).then((result) => {
      setFoods(result.data.data.foodByCategory)
    }).catch((err) => console.log(err));
  }

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <FoodItem food={item} />}
      keyExtractor={item => item._id}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8
  }
})



Category.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('categoryName')
  }
}

export default Category