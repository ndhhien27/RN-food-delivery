import React, { useState } from 'react';
import { FlatList } from 'react-native';

import axios from 'axios';

import CategoryListItem from '../components/CategoryListItem';

function Home(props) {

  const [categories, setCategories] = useState([]);

  axios({
    url: 'http://localhost:8080/graphql',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: {
      query: `
        query {
          categories {
            title
          }
        }
        `
    }
  }).then((result) => {
    console.log(result.data)
  }).catch(err => console.log(err));

  return (
    <FlatList>
    </FlatList>
  )
}

export default Home