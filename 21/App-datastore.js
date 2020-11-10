import { StatusBar } from 'expo-status-bar';
import React from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as firebase from 'firebase';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC0WDX8dp9vAFgTQ10I9RCghLbgQ7Xojc",
    authDomain: "lecture20-374fb.firebaseapp.com",
    databaseURL: "https://lecture20-374fb.firebaseio.com",
    projectId: "lecture20-374fb",
    storageBucket: "lecture20-374fb.appspot.com",
    messagingSenderId: "206294635202",
    appId: "1:206294635202:web:5808565053ec89288aa15b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default class App extends React.Component {

  state={
    firstname:null,
    lastname:null,
    userInfo:[]
  }

  saveData = async() =>{
    db.collection("users").add({
      firstname:"Christina",
      lastname:"Chung",
      email:"cfchung@iu.edu"
    }).catch(function(error){
      console.error("Error in adding document:", error);
    })

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

  getQueryData = async(lastname, firstname) =>{
     try{

      db.collection("users").where("lastname","==",lastname).where("firstname", "==", firstname).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
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

  getOrderedData = async() =>{
     try{

      db.collection("users").orderBy("email","desc").get().then((querySnapshot) => {
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

  removeData = async(firstname) =>{
    db.collection("users").where("firstname", "==", firstname).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          doc.ref.delete();
        // this.setState(prevState=>({
        //   userInfo:[...prevState.userInfo, {firstname:doc.data().firstname,lastname:doc.data().lastname,email:doc.data().email}]
        // }))
      })
    });  
  }

  componentDidMount(){
    // this.saveData();
    // this.getData();
    this.getOrderedData();
    console.log(this.state.userInfo)
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="Last Name"
          defaultValue={this.state.lastname}
          onChangeText={text=>this.setState({lastname:text})}
        />
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="First Name"
          defaultValue={this.state.firstname}
          onChangeText={text=>this.setState({firstname:text})}
        />
        <Button
          color = "#2A3132"
          title = "search"
          onPress = {()=>this.getQueryData(this.state.lastname, this.state.firstname)}
        />
        <Button
          color = "#2A3132"
          title = "delete"
          onPress = {()=>this.removeData(this.state.firstname)}
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

