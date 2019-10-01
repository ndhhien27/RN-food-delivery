import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

import { theme } from '../constants/theme';
import { image } from '../constants/images';

function FoodItem(props) {

  const { food } = props
  // console.log(food)
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'http://via.placeholder.com/640x360' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{food.title}</Text>
          <View>
            <Text>{food.price}</Text>
          </View>
        </View>
        <View style={styles.cartRow}>
          <Image source={image.addToCart} style={styles.addToCart} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 130
  },
  container: {
    flexDirection: 'row',
  },
  addToCart: {
    width: 25,
    height: 25
  },
  title: {
    fontSize: theme.text.size.xl
  },
  info: {
    marginLeft: 16,
    flex: 1,
    flexDirection: 'column'
  },
  cartRow: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
})

export default FoodItem