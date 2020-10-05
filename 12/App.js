import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, FlatList} from 'react-native';


/* TouchableHighlight*/
/*<TouchableHighlight onPress={()=>{}}>
  <View style={styles.button}>
    <Text style={styles.text}>{item}</Text>
  </View>
</TouchableHighlight>*/


/* TouchableOpacity*/
/*<TouchableOpacity style={styles.button} onPress={()=>{}}>
    <Text style={styles.text}>{item}</Text>
</TouchableOpacity>*/

/* ScrollView*/
/*
<ScrollView>
  {content}
</ScrollView>
*/

const movies = 
['Welcome to IU Cinema Webinar and Q&A', 'Jazz on a Summer’s Day', 'Uncle Boonmee Who Can Recall His Past Lives', 
'The Chase','Days of the Whale', 'Guy Maddin and James Naremore','A Conversation on Iron Jawed Angels','Represent', 
'A Conversation on Agnès Varda', 'Papicha', 'Whose Streets?', 'Aparisyon (Apparition)', 'Made in Bangladesh', 
'Isabel Sandoval','Animal Farm', 'I Used to Go Here', 'Filmmaker to Filmmaker: Karyn Kusama and Alexandre O. Philippe',
'Dead', 'RBG', 'Cinema Paradiso', 'Moroni for President', 'Kris Rey', 'Stuffed', 'A Conversation with Allis Markham', 
'I Used to Go Here', 'Marcel Duchamp: The Art of the Possible', 'Kris Rey', 'Chisholm ’72: Unbought & Unbossed', 
'A Conversation on Election','Neither Memory Nor Magic', 'Hugo Perez','Dr. Jekyll and Mr. Hyde', 'The Painter and the Thief'
]

export default class App extends React.Component {


  state={
    text:null
  }

  renderFunction=({item})=>(
    <Text>{item}</Text>
  )

  render(){

    var longString = [];
    var content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non velit at urna ornare varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce dictum dui neque, non volutpat leo blandit eget. Curabitur ac tellus urna. Donec scelerisque lacinia lobortis. Morbi feugiat porttitor nulla sed volutpat. In sapien sem, euismod vitae sem non, aliquet porttitor arcu. Phasellus molestie risus eget congue aliquam. Aliquam erat volutpat. Curabitur quam tellus, dignissim ac volutpat eget, malesuada efficitur sem. In nulla justo, mattis at justo quis, ultricies sodales massa. Integer aliquet dapibus pellentesque. Morbi tempus porttitor nunc et scelerisque. Ut vel tellus sem.";
    
    for (var i=0;i<100; i++){
      longString = [...longString, content];
    }

    return(
  
        <View style={styles.container}>
          <FlatList
            data={longString}
            renderItem={this.renderFunction}
            keyExtractor={item=>item}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, background:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems: "center"
  },text:{
    color:"crimson"
  }, button:{
    backgroundColor: "white",
    padding:10
  }
});
