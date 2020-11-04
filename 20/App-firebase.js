import { StatusBar } from 'expo-status-bar';
import React from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as firebase from 'firebase';


const firebaseConfig = {
    //copy for your firebase project
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default class App extends React.Component {

  state={
    name:null,
    userInfo:[]
  }

  saveData = async() =>{
    

    console.log("save Data")
  }

  getData = async() =>{
     try{

      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          this.setState(prevState=>({
            userInfo:[...prevState.userInfo, {firstname:doc.data().firstname,lastname:doc.data().lastname,email:doc.data().email}]
          }))
        })
      });  
      
    }catch (e){
      console.error(e)
    }

    console.log("get Data")
  }

  removeData = async() =>{
    //  try{
    //   // await AsyncStorage.removeItem("userInfo")
    //   await SecureStore.deleteItemAsync("userInfo")
    //   this.setState({name:null})
    // }catch (e){
    //   console.error(e)
    // }
  }

  componentDidMount(){
    this.getData();
    console.log(this.state.userInfo)
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
        <Button
          color = "#2A3132"
          title = "save"
          onPress = {this.saveData}
        />
        {this.state.userInfo.map(user => <Users {...user}/>)}
        </View>
      )
  }
}
class Users extends React.Component{
  render(){
    return(
      <View>
        <Text>{this.props.firstname}</Text>
        <Text>{this.props.lastname}</Text>
        <Text>{this.props.email}</Text>
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
  }
});

