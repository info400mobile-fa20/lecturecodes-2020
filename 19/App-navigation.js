import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';


//We could implement the API call in another file
import {getMovies} from './api.js';
import * as MovieSceen from './moviescreen.js';






//A screen that contains a Stack Navigator with two screens: MovieSearchScreen and MovieResultScreen
class StoryScreenSet extends React.Component {
  render(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
          initialRouteName="MovieSearchScreen">
          <Stack.Screen
            name="MovieSearchScreen"
            component={MovieSceen.MovieSearchScreen}
          />
          <Stack.Screen
            name="MovieResultScreen"
            component={MovieSceen.MovieResultScreen}
          />
        </Stack.Navigator>
      )
  }
}



export default class App extends React.Component {

  render(){
    const Tab = createBottomTabNavigator();

    return(
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="MovieScreen"
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="MovieScreen"
            component={MovieSceen.MovieScreenSet}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Feather name="home" size={24} color={color}/>
              ),
        }}
          />
          <Tab.Screen
            name="StoryScreen"
            component={StoryScreenSet}
          />
        </Tab.Navigator>
      </NavigationContainer>
      )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#90AFC5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultArea: {
    flex: 8,
    backgroundColor: '#336B87',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  movie: {
    flex: 1,
    backgroundColor: '#2A3132',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 5,
    margin:2
  },
  text:{
    color:"#fff"
  },
  photo: {
    height: 80,
    width: 80
  }
});
