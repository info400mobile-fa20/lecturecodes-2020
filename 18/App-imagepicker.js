import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';// import the default export from that module
import {Marker, Callout} from 'react-native-maps'; //import one of the export from that module
import logo from './assets/cafe.png';
import * as Location from 'expo-location'; //import the whole module
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';




/*<Marker
          coordinate={{latitude:39.1714804, longitude:-86.5368812}}
          title="Crumble Cafe West"
          description="Cumble Cafe on the west side of Bloomington"
          // pinColor="purple"
          image= {logo}>
        </Marker>
        */

/*<Image source={{uri: this.state.image}} style={{width:200, height:200}}/>*/
export default class App extends React.Component {

  state={
    image:null
  }

  

  launchImagePicker = async() =>{
    const status = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status.status !=="granted"){
      console.error("we need camera roll permission.")
      return;
    }

    const statusCamera = await ImagePicker.requestCameraPermissionsAsync();

    if (statusCamera.status !=="granted"){
      console.error("we need camera permission.")
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality:1
    });
    this.setState({image:result.uri})
  }

  render(){

   return (
      <View style={styles.container}>
      <Button 
        title= "Get photo"
        onPress = {()=> this.launchImagePicker()}/> 
        <Video source={{uri:this.state.image}} shouldPlay={true} style={{width:200, height:200}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:2
  },map:{
    // width: 200,
    // height: 200
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
