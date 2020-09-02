import PropTypes from 'prop-types'
import React from 'react'
import {StyleSheet, Image, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.touchableStyle}>
      <View style={styles.viewStyle}>
        <Image
          style={styles.imageStyle}
          source={{uri: props.item.thumbnails.w160}}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.item.title}</Text>
        <Text>{props.item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    backgroundColor: 'lightblue',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  imageStyle: {
    height: '100%',
    marginBottom: '100%'
  },
  textStyle:{
  },
  viewStyle:{
    margin: 5,
    flex: 1
  },
});

export default ListItem