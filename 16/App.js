import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 



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
          onPress={()=>this.props.navigation.navigate("Second", {sent:true})}
        />
        <Button
          title="go to 3rd screen"
          onPress={()=>this.props.navigation.navigate("Third", {info:"1st info"})}
        />
      </View>
      )
  }
}

class SecondScreenA extends React.Component{

  componentDidMount(){
    console.log("Second Screen mounted");
  }

  render(){

    // if (this.props.route.params.sent){
    //   console.log("1st sent is true")
    // }
    var info = ""
    if(this.props.route.param)
      info = this.props.route.param.info

    return(
      <View style={styles.second}>
        <Text>Second A</Text>
        <Text>{info}</Text>
        <Button
          title="go to 1st screen"
          onPress={()=>this.props.navigation.navigate("SecondB")}
        />
      </View>
      )
  }
}

class SecondScreenB extends React.Component{

  componentDidMount(){
    console.log("Second Screen mounted");
  }

  render(){

    // if (this.props.route.params.sent){
    //   console.log("1st sent is true")
    // }
    var info = ""
    if(this.props.route.param)
      info = this.props.route.param.info

    return(
      <View style={styles.second}>
        <Text>Second B</Text>
        <Text>{info}</Text>
        <Button
          title="go to 1st screen"
          onPress={()=>this.props.navigation.navigate("SecondA")}
        />
      </View>
      )
  }
}



class ThirdScreenA extends React.Component{

  render(){

    return(
      <View style={styles.second}>
        <Text>Third Screen A</Text>
        <Button
          title="go to 1st screen"
          onPress={()=>this.props.navigation.navigate("First",{info:"2nd info"})}
        />
        <Button
          title="go to 3rd screen"
          onPress={()=>this.props.navigation.navigate("Third" , {info:"2nd info"})}
        />
      </View>
      )
  }
}

class ThirdScreenB extends React.Component{

  render(){

    return(
      <View style={styles.second}>
        <Text>Third Screen B</Text>
        <Button
          title="go to 1st screen"
          onPress={()=>this.props.navigation.navigate("First",{info:"2nd info"})}
        />
        <Button
          title="go to 3rd screen"
          onPress={()=>this.props.navigation.navigate("Third" , {info:"2nd info"})}
        />
      </View>
      )
  }
}

class ThirdScreenSet extends React.Component{

  componentDidMount(){
    console.log("Second Screen mounted");
  }

  render(){

    const Top = createMaterialTopTabNavigator();
    return(
      <Top.Navigator 
          initialRouteName="SecondA"
      >
          <Top.Screen
            name="ThirdA"
            component={ThirdScreenA}
            options={{
              title:"Home",
              headerTitleStyle:{
                fontWeight:'bold'
              },
              headerStyle:{
                backgroundColor: "#555"
              },
              headerTintColor: "white",
      
            }}
          />
          <Top.Screen
            name="ThirdB"
            component={ThirdScreenB}
          />
    </Top.Navigator>
      )
  }
}

class SecondScreenSet extends React.Component{

  componentDidMount(){
    console.log("Second Screen mounted");
  }

  render(){

    const Stack = createStackNavigator();
    return(
      <Stack.Navigator 
          initialRouteName="SecondA"
      >
          <Stack.Screen
            name="SecondA"
            component={SecondScreenA}
            options={{
              title:"Home",
              headerTitleStyle:{
                fontWeight:'bold'
              },
              headerStyle:{
                backgroundColor: "#555"
              },
              headerTintColor: "white",
      
            }}
          />
          <Stack.Screen
            name="SecondB"
            component={SecondScreenB}
          />
    </Stack.Navigator>
      )
  }
}

export default class App extends React.Component {

  render(){

    // const Stack = createStackNavigator();
    const Tap = createBottomTabNavigator();

    return(
      <NavigationContainer>
        <Tap.Navigator 
          initialRouteName="First"
          tabBarOptions={{
            activeTintColor: 'teal',
            inactiveTiniColor: 'grey'
          }}>
          <Tap.Screen
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
              headerTintColor: "white",
              tabBarIcon:({color})=>(<MaterialCommunityIcons name="home-assistant" size={32} color={color} />)
            }}
          />
          <Tap.Screen
            name="Second"
            component={SecondScreenSet}
            options={{
              tabBarIcon:({color})=>(<AntDesign name="star" size={24} color={color} />)
            }}
          />
          <Tap.Screen
            name="Third"
            component={ThirdScreenSet}
            options={{
              tabBarIcon:({color})=>(<MaterialCommunityIcons name="account-details" size={24} color={color} />)
            }}
          />
        </Tap.Navigator>
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
  },third:{
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor:"orange",
    margin:2,
  }, 
});
