import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Button } from 'react-native';

import axios from 'axios';

import CategoryList from '../components/CategoryList';

function Home(props) {

  return (
    <ScrollView>
      <CategoryList />
    </ScrollView>
  )
}

Home.navigationOptions = {
  title: 'Home'
}

export default Home