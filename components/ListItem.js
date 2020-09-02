import PropTypes from 'prop-types'
import React from 'react'
import {StyleSheet, Image, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.touchableStyle}>
      <View style={styles.imageViewStyle}>
        <Image
          style={styles.imageStyle}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    backgroundColor: 'lightblue',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    margin: 10,
    elevation: 4, // Android
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 1
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    marginBottom: '30%',
    marginLeft: "10%",
    marginTop: "30%"
  },
  textStyle:{
    fontSize: 18,
    color: "darkgreen"
  },
  viewStyle:{
    margin: 5,
    flex: 2
  },
  imageViewStyle:{
    margin: 5,
    flex: 1
  },
});

export default ListItem