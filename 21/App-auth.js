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
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

export default class App extends React.Component {

  state={
    email:null,
    password:null,
    status:null
  }


  signUp = () =>{

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      this.setState({status:"Sign up successfully"})
    }).catch((error)=>{
      console.error(error.code)
      console.error(error.message)
      this.setState({status:error.message})
    }
    )

  }

  signIn = () =>{

    if(firebase.auth().currentUser){
      firebase.auth().signOut()
      this.setState({status:"Sign out successfully"})
    }else{
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        this.setState({status:"Sign in successfully"})
      }).catch((error)=>{
        console.error(error.code)
        console.error(error.message)
        this.setState({status:error.message})
      }
      )
    }
  }

  signInGoogle = () =>{
      firebase.auth().signInWithRedirect(provider)
      .then(()=>{
        // this.setState({status:"Sign in via Google successfully"})
      }).catch((error)=>{
        console.error(error.code)
        console.error(error.message)
        this.setState({status:error.message})
      }
      )
  }

  componentDidMount(){
    
    console.log("componentDidMount")

    firebase.auth().getRedirectResult()
    .then((result)=>{
        var token = result.credential.accessToken;
        var user = result.user
        this.setState({status:JSON.stringify(user)})
      }).catch((error)=>{
        console.error(error.code)
        console.error(error.message)
        this.setState({status:error.message})
      }
      )
    
  }


  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="User ID"
          defaultValue={this.state.email}
          onChangeText={text=>this.setState({email:text})}
        />
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="Password"
          defaultValue={this.state.password}
          secureTextEntry={true}
          onChangeText={text=>this.setState({password:text})}
        />
        <Button
          color = "#2A3132"
          title = "Sign Up"
          onPress = {this.signUp}
        />
        <Button
          color = "#2A3132"
          title = {firebase.auth().currentUser?"Sign out":"Sign in"}
          onPress = {this.signIn}
        />
        <Button
          color = "#2A3132"
          title = "Sign in via Google"
          onPress = {this.signInGoogle}
        />
        <Text>{this.state.status}</Text>
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

