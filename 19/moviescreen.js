import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import {getMovies} from './api.js';
import {styles} from './style.js'


class Movie extends React.Component {
  render(){
    return(
      <View style={styles.movie}>
        <Text style={styles.text}>Display title: {this.props.display_title}</Text>
        <Text style={styles.text}>Headline: {this.props.headline}</Text>
        <Text style={styles.text}>Bylne: {this.props.byline}</Text>
        <Text style={styles.text}>Publication Date: {this.props.publication_date}</Text>
        <Text style={styles.text}>URL: {this.props.link.url}</Text>
      </View>
      )
  }
}

export class MovieScreen extends React.Component {
  render(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
          initialRouteName="MovieSearch">
          <Stack.Screen
            name="MovieSearch"
            component={MovieSearch}
          />
          <Stack.Screen
            name="MovieResult"
            component={MovieResult}
          />
        </Stack.Navigator>
      )
  }
}

export class MovieSearch extends React.Component {

  state={
    movie:[],
    number:null
  }

  //Call the getWeather function using async keyword
  updateMovies = async() =>{
    const movieObject = await getMovies();

    for (var i=0; i<this.state.number; i++){
      this.setState(prevState=>({movie:[...prevState.movie, movieObject.results[i]]}));
    }
    this.props.navigation.navigate("MovieResult",  {movieObject: this.state.movie})
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.searchBar}>
            <TextInput
              style = {{borderColor:"black", borderBottomWidth:1}}
              placeholder="number of results"
              onChangeText={text=>this.setState({number:text})}
            />
            <Button
              color = "#2A3132"
              title = "submit"
              onPress = {this.updateMovies}
            />
          </View>
      </View>
      )
  }
}

export class MovieResult extends React.Component {

  renderFunction=({item})=>(
    <Movie {...item}/>
  )

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.resultArea}>
            <FlatList
              data={this.props.route.params.movieObject}
              renderItem={this.renderFunction}
              keyExtractor={item=>item.display_title}
            />
          </View>
      </View>
      )
  }
}
  photo: {
    height: 80,
    width: 80
  }
});