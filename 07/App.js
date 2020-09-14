import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is
        <Text>testing!</Text>
      </Text>
      <Image
        source= {require('./assets/kitties.jpg')}
        style= {styles.photo}
      />
      <Image
        source= {{uri: 'https://placekitten.com/g/200/300'}}
        style= {styles.photo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 40
  },
  photo:{
    width: 80,
    height: 80
  }
});
