import { StatusBar } from 'expo-status-bar';
import React from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

import { Vega, VegaLite, createClassFromSpec } from 'react-vega';

import data from './assets/data.json';

const barData = {
  values: [
    {a: "A",b: 20}, {a: "B",b: 34}, {a: "C",b: 55},
    {a: "D",b: 19}, {a: "E",b: 40}, {a: "F",b: 34},
    {a: "G",b: 91}, {a: "H",b: 78}, {a: "I",b: 25}
  ]
};

const groupData = {
  values: [
    {a: "group1",b: 2}, {a: "group1",b: 7}, {a: "group1",b: 4},
    {a: "group2",b: 1}, {a: "group2",b: 6}, {a: "group2",b: 2},
    {a: "group3",b: 8}, {a: "group3",b: 7}, 
    {a: "group4",b: 3}, {a: "group4",b: 9}, {a: "group4",b: 7}, 
    {a: "group5",b: 2}, {a: "group5",b: 7}, {a: "group5",b: 8},
  ]
};

const spec = {
  // "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "A bar chart with highlighting on hover and selecting on click. (Inspired by Tableau's interaction style.)",
  "data":barData,
  "selection": {
    "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
    "select": {"type": "multi"}
  },
  "mark": {
    "type": "bar",
    "fill": "#4C78A8",
    "stroke": "black",
    "cursor": "pointer"
  },
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"},
    "fillOpacity": {
      "condition": {"selection": "select", "value": 1},
      "value": 0.3
    },
    "strokeWidth": {
      "condition": [
        {
          "test": {
            "and": [
              {"selection": "select"},
              "length(data(\"select_store\"))"
            ]
          },
          "value": 2
        },
        {"selection": "highlight", "value": 1}
      ],
      "value": 0
    }
  },
  "config": {
    "scale": {
      "bandPaddingInner": 0.2
    }
  }
}
// const spec = {
//     description: "A simple bar chart with embedded data.",
//     // data:barData,
//     data:data,
//     mark: "bar",
//     encoding: {
//       x: {field: "a", type: "ordinal", title:"data a"},
//       y: {field: "b", type: "quantitative", title:"data b", aggregate:"sum"},
//     },
//     layer:[
//     {mark:"bar"},
//     {mark:{
//       type:"text",
//       align:"left",
//       "baseline":"middle",
//       dx:3
//       },
//       encoding:{
//         text:{
//           field:"b",
//           aggregate:"sum",
//           type:"quantitative",
//           format:".2"
//         }
//       }
//     }
//     ],  
//     width: 200
// };

export default class App extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Vega mode="vega-lite" spec={spec} />
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

