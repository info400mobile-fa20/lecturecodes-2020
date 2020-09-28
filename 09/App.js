import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//We could implement the API call in another file
import {getWeather} from './api.js';


//Wrapping fetch api into an async function
// const getWeather = async()=>{
//  //wait for the fetch result to assign it to the response
//  const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Bloomington,Indiana&appid=<apikey>");
//  //wait for the reponse transforming to a json obejct
//  const result = await response.json();

//  return result;
//  // console.log(result)
// }

export default class App extends React.Component {

  //shorthand for initialize the state object
  //you can also do it this way:
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     weatherObject: null
  //   }
  // }
  state={
    weatherObject:null
  }

  //Call the getWeather function using async keyword
  updateWeather = async() =>{
    const weatherObject = await getWeather();
    this.setState({weatherObject:weatherObject});
  }

  //Call the API function (updateWeather->getWeather) when the compoenents are ready
  componentDidMount(){
    this.updateWeather();
  }

  render(){
    //Because when the app initialized, the weatherObject is null so we want to check it before we access it
    //If it has a result (meaning the API result is back), then we show the result
    //If it is still null (which is often the case when initializing the view), then we just don't show the result
    if(this.state.weatherObject){
      return (
        <View style={styles.container}>
          <Text>Current temperature: {this.state.weatherObject.main.temp}</Text>
          <StatusBar style="auto" />
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
        </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: 80,
    width: 80
  }
});
