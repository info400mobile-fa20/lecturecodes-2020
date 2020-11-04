import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';// import the default export from that module
import {Marker, Callout} from 'react-native-maps'; //import one of the export from that module
import logo from './assets/cafe.png';
import * as Location from 'expo-location'; //import the whole module
import * as ImagePicker from 'expo-image-picker';


export default class App extends React.Component {

  state={
    location:null,
    image:null
  }

  getLocation = async() =>{
    // get user permission
    let {status} = await Location.requestPermissionsAsync();

    if (status !=="granted"){
      console.error("no permission")
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    this.setState({location:location});

    // get location
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

    let result = await ImagePicker.launchCameraAsync();
    this.setState({image:result.uri});

    this.getLocation();
  }

  render(){

    var coords = {
      latitude:39.1719781,
      longitude:-86.525315,
    } 

    if(this.state.location){
      coords = this.state.location.coords
    }

    return (
      <View style={styles.container}>
        <Button
          color = "#2A3132"
          title = "Take a photo"
          onPress = {this.launchImagePicker}
        />
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={{
            // latitude:39.1719781,
            latitude:coords.latitude,
            // longitude:-86.525315,
            longitude:coords.longitude,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07
          }}
        >
          <Marker
            coordinate={coords} 
            title="User Photo" 
            description="User Photo"
          >
            <Callout tooltip={true}>
              <View style={styles.container}>
              <Text>User Photo</Text>
              <Image source={{uri:this.state.image}} style={{width:64, height:64}}/>
              </View>
            </Callout>
          </Marker>
        </MapView>
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
    margin:10
  },map:{
    // width: 200,
    height: 600,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  }
});
