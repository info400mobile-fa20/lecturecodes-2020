import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



class FirstScreen extends React.Component{

  componentDidMount(){
    console.log("First Screen mounted");
  }

  render(){
    return(
      <View style={styles.first}>
        <Text>First Screen</Text>
        <Button
          title="go to 2nd screen"
          onPress={()=>this.props.navigation.navigate("Second", {info: "info from the first screen", name: "CC", phone:""})}
        />
      </View>
      )
  }
}

class SecondScreen extends React.Component{

  componentDidMount(){
    console.log("Second Screen mounted");
  }

  render(){
    return(
      <View style={styles.second}>
        <Text>Second Screen</Text>
        <Text>{this.props.route.params.info}</Text>
        <Button
          title="go to 1st screen"
          onPress={()=>this.props.navigation.goBack()}
        />
      </View>
      )
  }
}

export default class App extends React.Component {

  render(){

    const Stack = createStackNavigator();

    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="First" mode="modal">
          <Stack.Screen
            name="First"
            component={FirstScreen}
            options={{
              title:"Home",
              headerTitleStyle:{
                fontWeight:'bold'
              },
              headerStyle:{
                backgroundColor: "#555"
              },
              headerTintColor: "white"
            }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
          />
        </Stack.Navigator>
      <View></View>
      </NavigationContainer>
      )
  }
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal',
    margin:2
  },second:{
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor:"palevioletred",
    margin:2,
  }, 
});
