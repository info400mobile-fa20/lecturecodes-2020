import { StatusBar } from 'expo-status-bar';
import React from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class App extends React.Component {

  state={
    name:null
  }

  saveData = async() =>{
    try{
      await AsyncStorage.setItem("name", this.state.name)
    }catch (e){
      console.error(e)
    }
  }

  getData = async() =>{
     try{
      const data= await AsyncStorage.getItem("name")
      this.setState({name:data})
    }catch (e){
      console.error(e)
    }
  }

  removeData = async() =>{
     try{
      await AsyncStorage.removeItem("name")
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
          placeholder="Name"
          defaultValue={this.state.name}
          onChangeText={text=>this.setState({name:text})}
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
