import {StyleSheet, Text, View, FlatList, SafeAreaView,} from 'react-native';
import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'

const List = () => {

  const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
  const[data, setData] = useState([])

  useEffect( () => {
    const loadMedia = async () => {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      setData(json)
    };
    loadMedia()
  },[]);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        <ListItem singleMedia={item} />
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}



export default List