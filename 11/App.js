import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Switch, TextInput, KeyboardAvoidingView } from 'react-native';
import background from './assets/background.jpg'

// === function component ===
// const Caption = (props)=>{
//   return <Text>{props.type} component</Text>
// }

// === ImageBackground Component ===
/*      <ImageBackground 
        source={background} 
        style={styles.background} 
        blurRadius="5">
           
      </ImageBackground>
*/

// === Button Component ===
/*<Button
        title = "I'm a button!"
        //color set the text color on iOS and background color on Android
        color = "red"
        onPress = {(e)=>{alert(e.target.textContent)}}/>
*/
// === Switch Component ===
/*
<Switch
          //background color
          trackColor={{ false: "grey", true: "blue" }}
          //foreground color
          thumbColor={this.state.isEnabled ? "red" : "yellow"}
          //ios background color
          ios_backgroundColor="purple"
          //what to do when user switch on and off
          onValueChange={this.setEnabled}
          value={this.state.isEnabled}
        />
*/

// === TextInput Component ===
/*
<TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({text:text});
            console.log(this.state.text);
            }
          }
          multiline={true}
          numberOfLines={3}
          placeholder="put in some text"
        />
*/

// === class component ===
class Caption extends React.Component {
  render(){
    return <Text>{this.props.text} component</Text>;
  }
}

export default class App extends React.Component {

  //state object to store switch button state
  state={
    isEnabled:false,
    text:null
  }

  setSwitch = () =>{
    //reverse the previous switch button state
    this.setState(
      prevState =>({
        isEnabled:!prevState.isEnabled
      }));


  }

  render(){
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding">
        <TextInput
          textContentType = "name"
          defaultValue= "placeholder"
          style = {styles.text}
          onChangeText = {text=>{
            this.setState({text:text});
            // alert(this.state.text)

          }}
          multiline = {true}
          numberOfLines = {10}
        />

        <Caption text="class" />
        <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },background: {
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems: "center"
  },text:{
    borderWidth:1,
    // borderBottomWidth:1,
    borderColor: "black",
    height:300
  }
});
