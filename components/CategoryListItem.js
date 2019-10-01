import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function CategoryListItem(props) {

  const { item, onAddToCart, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Image style={styles.image}
            source={{ uri: 'http://via.placeholder.com/640x360' }} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.title}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  container: {
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 130,
    width: 130
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { height: 0, width: 0 }
  },
  info: {
    padding: 8
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    flex: 1,
    fontSize: 16,
    color: '#888'
  },
  priceText: {
    textTransform: 'uppercase',
    color: '#0f0'
  }
})

export default CategoryListItem