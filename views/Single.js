import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = ({route}) => {
  const {file} = route.params;
  console.log('kuva', mediaUrl + file.filename);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{file.title}</Text>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: mediaUrl + file.filename}}
        />
        <Text style={styles.description}>{file.description}</Text>
      </View>
    </SafeAreaView>
  );
};


Single.propTypes = {
  route: PropTypes.object,
};

export default Single;