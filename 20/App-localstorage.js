import { StatusBar } from 'expo-status-bar';
import React from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as SecureStore from 'expo-secure-store';

  
export default class App extends React.Component {

  state={
    name:null,
    userInfo:{firstname:null, lastname:null}
  }

  saveData = async() =>{
    try{
      //store a string
      // await AsyncStorage.setItem("name", this.state.name)
      await SecureStore.setItemAsync("name", this.state.name)

      //store an object
    // const jsonValue = JSON.stringify(this.state.userInfo);
    // await AsyncStorage.setItem("userInfo", jsonValue);


    }catch (e){
      console.error(e)
    }

    console.log("save Data")
  }

  getData = async() =>{
     try{
      //get a string value
      // const data= await AsyncStorage.getItem("name")
      const data= await SecureStore.getItemAsync("name")
      this.setState({name:data})

      //get an object
      // const jsonValue = await AsyncStorage.getItem("userInfo");
      // console.log(jsonValue);
      // if (jsonValue != null){
      //   const data = JSON.parse(jsonValue);
      //   this.setState({userInfo:data});
      // }

    }catch (e){
      console.error(e)
    }

    console.log("get Data")
  }

  removeData = async() =>{
     try{
      // await AsyncStorage.removeItem("userInfo")
      await SecureStore.deleteItemAsync("userInfo")
      this.setState({name:null})
    }catch (e){
      console.error(e)
    }
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="First Name"
          defaultValue={this.state.name}
          secureTextEntry={true}
          onChangeText={text=>this.setState({name:text})}
        />
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="Last NAme"
          defaultValue={this.state.userInfo.lastname}
          onChangeText={text=>this.setState(
            prevState=>({userInfo: {...prevState.userInfo, lastname:text}})
            )}
        />
        <Button
          color = "#2A3132"
          title = "save"
          onPress = {this.saveData}
        />
        <Button
          color = "#2A3132"
          title = "clear"
          onPress = {this.removeData}
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
  },
});
