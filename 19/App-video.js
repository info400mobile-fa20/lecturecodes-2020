import { StatusBar } from 'expo-status-bar';
import React from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps'; // import one of the export in the module
import photo from './assets/logo64.png';
import * as Location from 'expo-location';//import the whole module
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';



export default class App extends React.Component {

  state={
    choosenImage: null
  }

  launchCameraRollAsync = async () => {

    const statusCamera = await ImagePicker.requestCameraPermissionsAsync();
    if (statusCamera.status !== 'granted') {
        console.error('Sorry, we need camera permissions to make this work!');
        return;
    }

    const statusRoll = await ImagePicker.requestCameraRollPermissionsAsync();
    if (statusRoll.status !== 'granted') {
        console.error('Sorry, we need camera roll permissions to make this work!');
        return;
    }

    // let result = await ImagePicker.launchImageLibraryAsync();
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
    });
    console.log(result);
    this.setState({choosenImage: result.uri})
  }

  render(){
    return (
      <View style={styles.container}>
        <Button title="launch camera" onPress={()=>{this.launchCameraRollAsync();}} />
        {this.state.choosenImage&&(<Image source={{ uri: this.state.choosenImage }} style={{ width: 200, height: 200 }} />)}
        <Video
            source={{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay = {true}
            isLooping = {true}
            style={{ width: 300, height: 300 }}
          />
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
