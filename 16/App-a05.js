import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,FlatList } from 'react-native';
//We could implement the API call in another file
import {getMovies} from './api.js';


//Wrapping fetch api into an async function
// const getWeather = async()=>{
//  //wait for the fetch result to assign it to the response
//  const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Bloomington,Indiana&appid=4acd6f48610c97f8c4c409daa616bcb3");
//  //wait for the reponse transforming to a json obejct
//  const result = await response.json();

//  return result;
//  // console.log(result)
// }

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

export default class App extends React.Component {

  //shorthand for initialize the state object
  //you can also do it this way:
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     weatherObject: null
  //   }
  // }
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
  }

  //Call the API function (updateWeather->getWeather) when the compoenents are ready
  // componentDidMount(){
  //   this.updateMovies();
  // }
  renderFunction=({item})=>(
    <Movie {...item}/>
  )

  render(){
    //Because when the app initialized, the weatherObject is null so we want to check it before we access it
    //If it has a result (meaning the API result is back), then we show the result
    //If it is still null (which is often the case when initializing the view), then we just don't show the result
    // console.log(this.state.weatherObject)
    if(this.state.movie){
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <TextInput
              style = {{borderColor:"black", borderBottomWidth:1}}
              placeholder="number of results"
              textContentType="number"
              onChangeText={text=>this.setState({number:text})}
            />
            <Button
              color = "#2A3132"
              title = "submit"
              onPress = {this.updateMovies}
            />
          </View>
          <View style={styles.resultArea}>
            <FlatList
              data={this.state.movie}
              renderItem={this.renderFunction}
              keyExtractor={item=>item.display_title}
            />
          </View>
          <StatusBar style="auto" />
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
        </View>
        )
    }
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
