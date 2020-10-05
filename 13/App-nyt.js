import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {getMovies, getStories} from './api.js';


class Movie extends React.Component{

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.display_title}</Text>
        <Text>HEADLINE: {this.props.headline}</Text>
        <Text>BYLINE: {this.props.byline}</Text>
        <Text>PUBLICATION DATE: {this.props.publication_date}</Text>
        <Text>URL: {this.props.link.url}</Text>
        <View style={styles.divider}/>
        <StatusBar style="auto" />
      </View>
    )
  }
}

class Story extends React.Component{

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text>BYLINE: {this.props.byline}</Text>
        <Text>PUBLICATION DATE: {this.props.published_date}</Text>
        <Text>URL: {this.props.url}</Text>
        <View style={styles.divider}/>
        <StatusBar style="auto" />
      </View>
    )
  }
}

export default class App extends React.Component {

  state={
    movies:[],
    stories:[]
  }

  //Call the getMovie function using async keyword
  updateMovies = async() =>{
    const movieObject = await getMovies();
    console.log(movieObject)

    for (var i = 0; i< 5; i++){

      console.log(movieObject.results[i])
      // this.setState(prevState => ({
      //   comments: [...prevState.comments, newComment],
      // }))

      this.setState(prevState => ({
        movies:[...prevState.movies, movieObject.results[i]]
      }))
    }
    console.log(this.state.movies.length);
    
  }

  updateStories = async() =>{
    const storyObject = await getStories();
    console.log(storyObject)

    for (var i = 0; i< 5; i++){

      console.log(storyObject.results[i])
      // this.setState(prevState => ({
      //   comments: [...prevState.comments, newComment],
      // }))

      this.setState(prevState => ({
        stories:[...prevState.stories, storyObject.results[i]]
      }))
    }
    console.log(this.state.stories.length);
    
  }

  //Call the API function (updateWeather->getWeather) when the compoenents are ready
  componentDidMount(){
    this.updateMovies();
    this.updateStories();
  }

  render(){
    //Because when the app initialized, the weatherObject is null so we want to check it before we access it
    //If it has a result (meaning the API result is back), then we show the result
    //If it is still null (which is often the case when initializing the view), then we just don't show the result
    console.log(this.state.movies.length);
      return (
        <View style={styles.container}>
          <Text>How many entries to present?</Text>
          <TextInput
              style={styles.textInput}
              textContentType="number"
              placeholder="10"
            />
          <Button title="Submit" style={{color:"black", width:"400"}}/>
          <Text style={styles.heading}>=== Critics Picks ===</Text>
          {this.state.movies.map(movieItem => <Movie {...movieItem} key={movieItem.display_title}/>)}
          <Text style={styles.heading}>=== TOP SCIENCE STORIES ===</Text>
          {this.state.stories.map(storyItem => <Story {...storyItem} key={storyItem.display_title}/>)}
          <StatusBar style="auto" />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 2,
    marginRight: 2
  },heading:{
    fontSize: 26,
    marginTop: 15,
    marginBottom: 15
  },button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderColor: "crimson",
    borderWidth: 1,
    marginTop: 1,
    marginBottom: 1,
    width: "100%"
  },
  title:{
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5
  },
  divider:{
    marginTop: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
