
// using node-fetch=> this is only needed when you run using node.js
const fetch = require("node-fetch");
// Using promise

// var data;

fetch("http://api.openweathermap.org/data/2.5/weather?q=Bloomington,Indiana&appid=4acd6f48610c97f8c4c409daa616bcb3")
.then(response=>{ return response.json()}) //process the promise with the response, transforming it into json object
.then(result => {
	console.log(result);
}) // access json object


// //using await/async
// getWeather = async()=>{
// 	//wait for the fetch result to assign it to the response
// 	const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Bloomington,Indiana&appid=4acd6f48610c97f8c4c409daa616bcb3");
// 	//wait for the reponse transforming to a json obejct
// 	const result = await response.json();

// 	console.log(result)
// }

// getWeather();