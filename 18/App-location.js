import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';// import the default export from that module
import {Marker, Callout} from 'react-native-maps'; //import one of the export from that module
import logo from './assets/cafe.png';
import * as Location from 'expo-location'; //import the whole module


var cafes =[{
  coordinate: {latitude:39.1714804, longitude:-86.5368812},
  title:"Crumble Cafe West",
  description:"Cumble Cafe on the west side of Bloomington"
  },
  {
    coordinate: {latitude:39.1668473, longitude:-86.5372437},
    title:"Inkwell Cafe",
    description:"Inkwell Cafe on the College ave"
  }
];

/*<Marker
          coordinate={{latitude:39.1714804, longitude:-86.5368812}}
          title="Crumble Cafe West"
          description="Cumble Cafe on the west side of Bloomington"
          // pinColor="purple"
          image= {logo}>
        </Marker>
        */

export default class App extends React.Component {

  state={
    location:null
  }

  getLocation = async() =>{
    // get user permission
    // {status} unpacks the object as status.status
    // let {status} = await Location.requestPermissionsAsync();
    let status = await Location.requestPermissionsAsync();

    if (status.status !=="granted"){
      console.error("no permission")
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    let needmore = (await Location.geocodeAsync("IN 47408"))[0];

    cafes = [...cafes, {coordinate:needmore, title:"Needmore coffee", description:"Needmore cafe on the east side"}]
    this.setState({location:location});

    // get location
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){

    if(!this.state.location)
      return (<View style={styles.container}></View>)
    else
    {    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          // latitude:39.1719781,
          latitude:this.state.location.coords.latitude,
          // longitude:-86.525315,
          longitude:this.state.location.coords.longitude,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07
        }}
      >
        {cafes.map((cafe, index)=>(
          <Marker
            key={index}
            coordinate={cafe.coordinate} 
            title={cafe.title} 
            description={cafe.description}
          >
            <Callout tooltip={true}>
              <View>
              <Text>{cafe.title}</Text>
              <Image source={logo} style={{width:64, height:64}}/>
              </View>
            </Callout>
            <View>
              <Text>{cafe.title}</Text>
            </View>
          </Marker>)
        )}
        
      </MapView>
      </View>
    )
    }
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
